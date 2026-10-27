/** @jsxImportSource preact */
/// <reference types="systemjs" />

import { render } from 'preact/compat';
import type { BasePlugin } from 'blinko';

import plugin from '../plugin.json';
import en from './locales/en.json';
import zh from './locales/zh.json';
import { Setting } from './setting';
import { SpotifyCardScanner } from './core/scanner';
import { injectCardStyle, removeCardStyle } from './core/card';
import { DEFAULTS, loadSettings, normalizeSettings, saveSettings, type PluginSettings } from './core/config';

/** 与 plugin.json 的 name 保持一致，配置项按这个前缀存在服务端 */
const PLUGIN_NAME = 'blinko-plugin-spotify-embed';

/** 自编译 App 时插件既在服务端装了一份、又打进了 dist/public，可能被加载两次 */
const ACTIVE_KEY = '__BLINKO_SPOTIFY_CARD_ACTIVE__';

/**
 * 主入口：SystemJS 模块，导出实现 BasePlugin 的类。
 * 插件运行在主窗口里，DOM 增强逻辑见 core/scanner.ts。
 */
System.register([], (exports) => ({
  execute: () => {
    exports(
      'default',
      class Plugin implements BasePlugin {
        constructor() {
          // 元信息来自 plugin.json（名称 / 版本 / 作者 / 说明）
          Object.assign(this, plugin);
        }

        /** 告诉 Blinko：这个插件有设置面板 */
        withSettingPanel = true;

        private settings: PluginSettings = { ...DEFAULTS };

        private scanner = new SpotifyCardScanner(() => this.settings);

        /** 由 Blinko 在插件设置弹窗里调用 */
        renderSettingPanel = () => {
          const container = document.createElement('div');
          render(<Setting settings={this.settings} onSave={this.applySettings} />, container);
          return container;
        };

        async init() {
          const active = (window as any)[ACTIVE_KEY];
          if (active) {
            console.warn('[spotify-card] 已经有一个实例在运行，跳过重复加载');
            return;
          }
          (window as any)[ACTIVE_KEY] = this;

          this.initI18n();
          injectCardStyle();
          this.settings = await loadSettings(PLUGIN_NAME);
          this.scanner.start();
          console.log('[spotify-card] ready', this.settings);
        }

        /** 按用户维度持久化到服务端，localStorage 只做首屏缓存 */
        private applySettings = async (next: PluginSettings) => {
          this.settings = normalizeSettings(next);
          await saveSettings(PLUGIN_NAME, this.settings);
          this.scanner.rescan();
        };

        private initI18n() {
          window.Blinko?.i18n?.addResourceBundle?.('en', 'translation', en);
          window.Blinko?.i18n?.addResourceBundle?.('zh', 'translation', zh);
        }

        destroy() {
          this.scanner.stop();
          removeCardStyle();
          if ((window as any)[ACTIVE_KEY] === this) (window as any)[ACTIVE_KEY] = null;
          console.log('[spotify-card] destroyed');
        }
      }
    );
  }
}));
