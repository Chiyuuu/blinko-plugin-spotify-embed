export type SpotifyKind = 'track' | 'album' | 'playlist' | 'artist' | 'episode' | 'show';

export interface SpotifyInfo {
  kind: SpotifyKind;
  id: string;
  href: string;
}

const SPOTIFY_HOSTS = ['open.spotify.com', 'play.spotify.com'];

/** /track/{id}，兼容 /intl-zh/ 前缀、/embed/ 前缀、query 与 hash */
const PATH_RE = /^\/(?:intl-[a-z-]+\/)?(?:embed\/)?(track|album|playlist|artist|episode|show)\/([A-Za-z0-9]{10,64})\/?$/i;

export const KIND_LABEL: Record<SpotifyKind, string> = {
  track: '单曲',
  album: '专辑',
  playlist: '歌单',
  artist: '艺人',
  episode: '播客单集',
  show: '播客节目'
};

/** Spotify 官方 Embed 的标准高度：单曲 152，单集 232，合辑类 352 */
export const KIND_HEIGHT: Record<SpotifyKind, number> = {
  track: 152,
  episode: 232,
  album: 352,
  playlist: 352,
  artist: 352,
  show: 352
};

/**
 * 解析 Spotify 链接，返回 { kind, id, href }；不是可嵌入链接则返回 null。
 */
export function parseSpotify(href: string | null | undefined): SpotifyInfo | null {
  if (!href || typeof href !== 'string') return null;

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;

  const host = url.hostname.toLowerCase();
  if (!SPOTIFY_HOSTS.includes(host)) return null;

  const match = PATH_RE.exec(url.pathname);
  if (!match) return null;

  const kind = match[1].toLowerCase() as SpotifyKind;
  const id = match[2];

  return { kind, id, href: `https://open.spotify.com/${kind}/${id}` };
}

export function kindLabel(kind: SpotifyKind): string {
  return KIND_LABEL[kind] ?? '链接';
}

export function kindHeight(kind: SpotifyKind): number {
  return KIND_HEIGHT[kind] ?? 152;
}
