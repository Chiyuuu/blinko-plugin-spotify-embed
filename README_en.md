# Blinko Spotify Embed Card

Paste a Spotify link into a Blinko note and it becomes an official Spotify embed card — cover art, track title, artist, progress bar and playback controls, all rendered by Spotify itself.

![preview](preview/shot-light.png)

> The player area in the screenshot is a static mock (this machine cannot reach open.spotify.com). In a browser with Spotify access it is the real Spotify iframe.

Built on the official [blinko-plugin-template](https://github.com/blinko-space/blinko-plugin-template): Vite + Preact + TypeScript, output `release/index.js` (SystemJS).

## Why the official embed instead of the Web API

- Blinko's built-in Spotify integration imports **mp3 files** and runs audio fingerprinting; it does not parse links.
- The Web API needs a Client ID/Secret in the frontend, token handling, rate limits and region handling.
- The official embed (`https://open.spotify.com/embed/{type}/{id}`) needs **no key, no quota**, and always shows the current cover/title/artist, plus a 30s preview player.

So the plugin makes zero API calls: detect link → build card → mount the official iframe.

## Supported link types

`track` (152px), `episode` (232px), `album` / `playlist` / `artist` / `show` (352px). Also handles `/intl-xx/` prefixes, `?si=` params and `/embed/` URLs.

## Install

**From GitHub (permanent):** Blinko → Settings → Plugins → Marketplace → *Install from GitHub*, enter
`https://github.com/Chiyuuu/blinko-plugin-spotify-embed`. Blinko downloads `releases/download/v1.0.0/release.zip`
into `.blinko/plugins/` and keeps it installed across restarts and devices.

**Local development:** 

```bash
bun install
bun run dev          # vite watch + WebSocket on ws://localhost:8080
```

then **Settings → Plugins → Local Development → Add Local Plugin** with `ws://localhost:8080`.
Without bun: `bun run build && node tools/dev-server.mjs`.

The WebSocket is opened by the **browser**, so this works even when Blinko runs in Docker on another host — use `ws://<your-lan-ip>:8080` if the browser is not on the same machine.

## Project layout

```
plugin.json
src/index.tsx        System.register entry + plugin class
src/setting.tsx      settings panel (Preact)
src/core/            spotify.ts / card.ts / scanner.ts / config.ts / style.ts
src/locales/         zh.json, en.json
release/index.js     built SystemJS bundle
tools/dev-server.mjs zero-dependency pusher
preview/             offline preview pages
```

## Settings

| Option | Default | Description |
| --- | --- | --- |
| Show header bar | on | Spotify mark, link type and an "open" button |
| Lazy load player | on | Mount the iframe only when it scrolls near the viewport |
| Hide native link preview | on | Replace Blinko's own preview row so the link is not shown twice |
| Max card width | 0 | px, 0 = follow note width |

Stored server-side per user via the plugin config API, with a localStorage cache for the first paint.

## How it hooks into Blinko

Blinko plugins are SystemJS modules running in the host window. The public plugin API exposes toolbar icons, context menus, dialogs, AI prompts, card/editor footer slots and plugin config — but **no note-content renderer hook**. So the plugin uses DOM enhancement:

- `MutationObserver` + debounced idempotent `scan()` over `a[href*="spotify.com"]`;
- standalone links are wrapped by Blinko in `.link-preview-block` — the card is inserted right after it and the native preview is hidden purely via CSS `:has(+ .bs-card)`;
- inline links keep the original anchor and get a card below the paragraph;
- the plugin only inserts its own nodes and never mutates React-owned ones, so re-renders are safe; replaced nodes are detected and reconciled without duplicates or leftovers.

## Mobile

Works in a mobile browser / PWA (same origin as your server, so `/plugins/...` resolves). It does **not** work in the official Tauri app: the app bundles the frontend locally and only redirects API calls to your server, so the plugin script request hits the local bundle and 404s. Use the web app on your phone, or ship a custom build with the plugin baked in.

Narrow screens (<480px) get tighter header spacing; lazy mounting keeps only nearby iframes alive.

## Limitations

Needs network access to `open.spotify.com` for the iframe (a proxy is required in mainland China). `spotify:` URIs and `spotify.link` short links are not resolved. Requires a Blinko version that ships the plugin system.

MIT
