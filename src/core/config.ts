export interface PluginSettings {
  /** 卡片顶部信息条（Spotify 标识 / 类型 / 打开按钮） */
  showHeader: boolean;
  /** 滚动到附近才挂载 iframe */
  lazy: boolean;
  /** 用卡片替换 Blinko 原生链接预览行 */
  hideNative: boolean;
  /** 卡片最大宽度，0 = 跟随笔记宽度 */
  maxWidth: number;
}

export const DEFAULTS: PluginSettings = {
  showHeader: true,
  lazy: true,
  hideNative: true,
  maxWidth: 0
};

const CACHE_KEY = 'bs-spotify-embed:settings';

function isOn(value: unknown): boolean {
  return value !== false && value !== 'false';
}

export function normalizeSettings(raw: unknown): PluginSettings {
  const src = (raw ?? {}) as Record<string, unknown>;
  const width = Number(src.maxWidth);

  return {
    showHeader: isOn(src.showHeader),
    lazy: isOn(src.lazy),
    hideNative: isOn(src.hideNative),
    maxWidth: Number.isFinite(width) && width > 0 ? Math.min(Math.max(width, 240), 1200) : 0
  };
}

function configApi(): any {
  return (window as any).Blinko?.api?.config;
}

/** 服务端配置为主，localStorage 只做首屏缓存（避免闪烁） */
export async function loadSettings(pluginName: string): Promise<PluginSettings> {
  let settings: PluginSettings = { ...DEFAULTS };

  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) ?? 'null');
    if (cached) settings = normalizeSettings({ ...DEFAULTS, ...cached });
  } catch {
    /* ignore broken cache */
  }

  try {
    const api = configApi();
    if (api?.getPluginConfig) {
      const remote = await api.getPluginConfig.query({ pluginName });
      if (remote && typeof remote === 'object' && Object.keys(remote).length > 0) {
        settings = normalizeSettings({ ...DEFAULTS, ...remote });
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(settings));
        } catch {
          /* ignore quota errors */
        }
      }
    }
  } catch (error) {
    console.warn('[spotify-card] 读取插件配置失败，使用默认值', error);
  }

  return settings;
}

export async function saveSettings(pluginName: string, settings: PluginSettings): Promise<void> {
  const api = configApi();
  const keys = Object.keys(DEFAULTS) as (keyof PluginSettings)[];

  if (api?.setPluginConfig) {
    await Promise.all(
      keys.map((key) => api.setPluginConfig.mutate({ pluginName, key, value: settings[key] }))
    );
  }

  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(settings));
  } catch {
    /* ignore quota errors */
  }
}
