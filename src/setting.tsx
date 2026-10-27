/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';
import { DEFAULTS, normalizeSettings, type PluginSettings } from './core/config';

interface SettingProps {
  settings: PluginSettings;
  onSave: (next: PluginSettings) => Promise<void>;
}

function Row({ label, hint, children }: { label: string; hint: string; children: ComponentChildren }) {
  return (
    <div class="bs-row">
      <div>
        <div class="bs-row-label">{label}</div>
        <div class="bs-row-hint">{hint}</div>
      </div>
      {children}
    </div>
  );
}

/**
 * 插件设置面板（Preact），由 renderSettingPanel() 渲染进 Blinko 的插件设置弹窗。
 * 文本走 Blinko 的 i18n，配置写回 api.config.setPluginConfig。
 */
export function Setting({ settings, onSave }: SettingProps) {
  const [state, setState] = useState<PluginSettings>(settings);
  const [saving, setSaving] = useState(false);

  const t = (key: string): string => window.Blinko?.i18n?.t?.(key) ?? key;
  const patch = (next: Partial<PluginSettings>) => setState((prev) => ({ ...prev, ...next }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(normalizeSettings(state));
      window.Blinko?.toast?.success?.(t('saved'));
      window.Blinko?.closeDialog?.();
    } catch (error) {
      console.error('[spotify-card] 保存配置失败', error);
      window.Blinko?.toast?.error?.(t('saveFailed'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div class="bs-settings">
      <div class="bs-set-title">{t('title')}</div>
      <div class="bs-set-desc">{t('desc')}</div>

      <Row label={t('showHeader')} hint={t('showHeaderHint')}>
        <input
          type="checkbox"
          checked={state.showHeader}
          onChange={(event) => patch({ showHeader: event.currentTarget.checked })}
        />
      </Row>

      <Row label={t('lazy')} hint={t('lazyHint')}>
        <input
          type="checkbox"
          checked={state.lazy}
          onChange={(event) => patch({ lazy: event.currentTarget.checked })}
        />
      </Row>

      <Row label={t('hideNative')} hint={t('hideNativeHint')}>
        <input
          type="checkbox"
          checked={state.hideNative}
          onChange={(event) => patch({ hideNative: event.currentTarget.checked })}
        />
      </Row>

      <Row label={t('maxWidth')} hint={t('maxWidthHint')}>
        <input
          type="number"
          min={0}
          max={1200}
          step={20}
          value={String(state.maxWidth)}
          onInput={(event) => patch({ maxWidth: Number(event.currentTarget.value) || 0 })}
        />
      </Row>

      <Row label={t('fixIdleCpu')} hint={t('fixIdleCpuHint')}>
        <input
          type="checkbox"
          checked={state.fixIdleCpu}
          onChange={(event) => patch({ fixIdleCpu: event.currentTarget.checked })}
        />
      </Row>

      <div class="bs-actions">
        <button type="button" onClick={() => setState(normalizeSettings(DEFAULTS))}>
          {t('reset')}
        </button>
        <button type="button" class="bs-primary" disabled={saving} onClick={handleSave}>
          {t('save')}
        </button>
      </div>
    </div>
  );
}
