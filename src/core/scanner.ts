import { createCard, insertAfter, mountFrame } from './card';
import { parseSpotify, type SpotifyInfo } from './spotify';
import type { PluginSettings } from './config';

const SELECTOR = 'a[href*="spotify.com"]';

/**
 * DOM 增强：Blinko 的插件 API 没有「笔记内容渲染钩子」，
 * 所以在主窗口里盯 a[href*=spotify.com]，把卡片插到链接所在的块后面。
 *
 * 性能取舍：
 * - 增量优先：只在新增子树里找链接，避免每次 DOM 变动都全文档 querySelectorAll；
 * - 全量只在启动、删除节点后、或节流到期时做一次，负责清理失联卡片。
 *
 * 原则：只插入自己的节点，从不改动 React 管理的节点。
 */
export class SpotifyCardScanner {
  private readonly cards = new Map<HTMLAnchorElement, HTMLElement>();
  private observer: MutationObserver | null = null;
  private io: IntersectionObserver | null = null;
  private fullTimer: number | null = null;

  constructor(private readonly getSettings: () => PluginSettings) {}

  start(): void {
    if (this.observer) return;

    if (typeof IntersectionObserver === 'function') {
      this.io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            this.io?.unobserve(entry.target);
            mountFrame(entry.target as HTMLElement);
          }
        },
        { rootMargin: '480px 0px' }
      );
    }

    this.scan();

    this.observer = new MutationObserver((records) => this.onMutations(records));
    this.observer.observe(document.body, { childList: true, subtree: true });
  }

  stop(): void {
    this.observer?.disconnect();
    this.observer = null;
    this.io?.disconnect();
    this.io = null;

    if (this.fullTimer !== null) {
      window.clearTimeout(this.fullTimer);
      this.fullTimer = null;
    }

    for (const anchor of Array.from(this.cards.keys())) this.removeCard(anchor);
  }

  /** 设置变更后重建全部卡片 */
  rescan(): void {
    for (const anchor of Array.from(this.cards.keys())) this.removeCard(anchor);
    this.scan();
  }

  private onMutations(records: MutationRecord[]): void {
    const added: Element[] = [];
    let removed = false;

    for (const record of records) {
      if (record.type !== 'childList') continue;
      const target = record.target;
      // 忽略自己卡片内部的增删（挂 iframe / 骨架），避免自激
      if (target instanceof Element && target.closest('[data-bs-card]')) continue;

      for (const node of Array.from(record.addedNodes)) {
        if (node instanceof Element) added.push(node);
      }
      if (record.removedNodes.length > 0) removed = true;
    }

    if (added.length > 0) this.processNodes(added);
    // 有删除时才需要全量对账（清理 React 重渲染后失联的卡片）
    if (removed) this.scheduleFullScan();
  }

  /** 只在新增子树里找链接 */
  private processNodes(nodes: Element[]): void {
    const anchors = new Set<HTMLAnchorElement>();

    for (const node of nodes) {
      if (!node.isConnected) continue;
      if (node.matches(SELECTOR)) anchors.add(node as HTMLAnchorElement);
      const found = node.querySelectorAll<HTMLAnchorElement>(SELECTOR);
      for (const anchor of Array.from(found)) anchors.add(anchor);
    }

    for (const anchor of anchors) this.handleAnchor(anchor);
  }

  private scheduleFullScan(): void {
    if (this.fullTimer !== null) return;
    this.fullTimer = window.setTimeout(() => {
      this.fullTimer = null;
      this.scan();
    }, 400);
  }

  private scan(): void {
    const anchors = document.querySelectorAll<HTMLAnchorElement>(SELECTOR);
    const live = new Set<HTMLAnchorElement>();

    for (const anchor of Array.from(anchors)) {
      if (this.handleAnchor(anchor)) live.add(anchor);
    }

    for (const [anchor, card] of Array.from(this.cards.entries())) {
      if (!live.has(anchor) || !anchor.isConnected || !card.isConnected) this.removeCard(anchor);
    }
  }

  /** 处理单个链接，返回它是否是一张有效卡片（供全量对账用） */
  private handleAnchor(anchor: HTMLAnchorElement): boolean {
    if (!anchor.isConnected) return false;
    if (anchor.closest('[data-bs-card]') || anchor.closest('.bs-settings')) return false;
    // 编辑态不干扰输入
    if (anchor.isContentEditable || anchor.closest('[contenteditable="true"]') || anchor.closest('.cm-editor')) return false;

    const info = parseSpotify(anchor.getAttribute('href'));
    if (!info) return false;

    const card = this.cards.get(anchor);
    if (card?.isConnected && card.getAttribute('data-href') === info.href) return true;

    if (card) this.removeCard(anchor);
    this.addCard(anchor, info);
    return true;
  }

  private addCard(anchor: HTMLAnchorElement, info: SpotifyInfo): void {
    const settings = this.getSettings();
    const block = anchor.closest<HTMLElement>('.link-preview-block');
    const host = block ?? anchor.closest<HTMLElement>('p, li, blockquote, h1, h2, h3, h4, h5, h6');
    if (!host || !host.parentNode) return;

    const card = createCard(info, settings);

    if (block && settings.hideNative) {
      card.classList.add('bs-hide-native');
      block.setAttribute('data-bs-hidden-by-card', '1');
      block.style.display = 'none';
    }

    if (host.tagName === 'LI') {
      // 列表项里：卡片放到 li 内部末尾，避免破坏 ul/ol 结构
      host.appendChild(card);
    } else {
      insertAfter(host, card);
    }

    this.cards.set(anchor, card);

    if (settings.lazy && this.io) this.io.observe(card);
    else mountFrame(card);
  }

  private removeCard(anchor: HTMLAnchorElement): void {
    const card = this.cards.get(anchor);
    if (!card) return;

    try {
      this.io?.unobserve(card);
    } catch {
      /* ignore */
    }

    const prev = card.previousElementSibling;
    if (prev instanceof HTMLElement && prev.getAttribute('data-bs-hidden-by-card') === '1') {
      prev.style.display = '';
      prev.removeAttribute('data-bs-hidden-by-card');
    }

    card.remove();
    this.cards.delete(anchor);
  }
}
