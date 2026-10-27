import { kindHeight, kindLabel, type SpotifyInfo } from './spotify';
import type { PluginSettings } from './config';
import { CARD_STYLE } from './style';

const STYLE_ID = 'bs-spotify-embed-style';

const LOGO =
  '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">' +
  '<path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.28c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.36.18.42.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.54.18-1.14-.12-1.32-.66-.18-.54.12-1.14.66-1.32 4.26-1.26 11.28-1.02 15.72 1.62.48.3.66.96.36 1.44-.3.36-.96.54-1.5.24z"/>' +
  '</svg>';

/** 卡片 -> 链接信息（避免往 DOM 节点上挂私有属性） */
const CARD_INFO = new WeakMap<HTMLElement, SpotifyInfo>();

export function injectCardStyle(): void {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = CARD_STYLE;
  document.head.appendChild(style);
}

export function removeCardStyle(): void {
  document.getElementById(STYLE_ID)?.remove();
}

/** 创建卡片骨架（iframe 由 lazy 逻辑挂载） */
export function createCard(info: SpotifyInfo, settings: PluginSettings): HTMLElement {
  const height = kindHeight(info.kind);

  const card = document.createElement('div');
  card.className = 'bs-card';
  card.setAttribute('data-bs-card', info.kind);
  card.setAttribute('contenteditable', 'false');
  card.setAttribute('data-href', info.href);

  if (settings.maxWidth > 0) {
    card.style.setProperty('--bs-max', `${settings.maxWidth}px`);
  }

  if (settings.showHeader) {
    const head = document.createElement('div');
    head.className = 'bs-head';

    const logo = document.createElement('span');
    logo.className = 'bs-logo';
    logo.innerHTML = LOGO;
    head.appendChild(logo);

    const kind = document.createElement('span');
    kind.className = 'bs-kind';
    kind.textContent = `Spotify · ${kindLabel(info.kind)}`;
    head.appendChild(kind);

    const open = document.createElement('a');
    open.className = 'bs-open';
    open.href = info.href;
    open.target = '_blank';
    open.rel = 'noopener noreferrer';
    open.textContent = '打开';
    head.appendChild(open);

    card.appendChild(head);
  }

  const frame = document.createElement('div');
  frame.className = 'bs-frame';
  frame.style.height = `${height}px`;

  const skeleton = document.createElement('div');
  skeleton.className = 'bs-skeleton';
  skeleton.innerHTML = '<span class="bs-eq"><i></i><i></i><i></i><i></i></span>';
  frame.appendChild(skeleton);

  card.appendChild(frame);
  CARD_INFO.set(card, info);

  // 卡片内部的点击不要冒泡到笔记卡片（iframe 内部事件本来就不会冒泡出来）
  card.addEventListener('click', (event) => event.stopPropagation());

  return card;
}

/** 挂载官方 Embed iframe */
export function mountFrame(card: HTMLElement): void {
  if (!card.isConnected) return;

  const info = CARD_INFO.get(card);
  const frame = card.querySelector<HTMLElement>('.bs-frame');
  if (!info || !frame || frame.getAttribute('data-mounted') === '1') return;

  frame.setAttribute('data-mounted', '1');
  const height = kindHeight(info.kind);

  const iframe = document.createElement('iframe');
  iframe.className = 'bs-iframe';
  iframe.setAttribute(
    'src',
    `https://open.spotify.com/embed/${info.kind}/${info.id}?utm_source=generator&theme=0`
  );
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', String(height));
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
  iframe.setAttribute('allowfullscreen', 'true');
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('title', `Spotify ${kindLabel(info.kind)}`);

  const tipTimer = window.setTimeout(() => {
    if (frame.classList.contains('bs-loaded') || frame.querySelector('.bs-tip')) return;
    const tip = document.createElement('div');
    tip.className = 'bs-tip';
    tip.textContent = '加载中…若一直空白，请确认当前网络可以访问 open.spotify.com';
    frame.appendChild(tip);
  }, 8000);

  iframe.addEventListener('load', () => {
    frame.classList.add('bs-loaded');
    window.clearTimeout(tipTimer);
    frame.querySelector('.bs-tip')?.remove();
  });

  frame.appendChild(iframe);
}

/** 插到 host 之后；若后面已经排着卡片，就继续往后排，保持原链接顺序 */
export function insertAfter(host: HTMLElement, card: HTMLElement): void {
  let ref = host;
  while (
    ref.nextElementSibling instanceof HTMLElement &&
    ref.nextElementSibling.hasAttribute('data-bs-card')
  ) {
    ref = ref.nextElementSibling;
  }
  ref.insertAdjacentElement('afterend', card);
}
