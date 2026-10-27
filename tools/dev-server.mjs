#!/usr/bin/env node
/**
 * Blinko 本地插件推送服务（零依赖）
 *
 * 对应 Blinko「设置 → 插件 → 本地开发 → 添加本地插件」的 WebSocket 协议：
 * 连上后推送 { type: 'code', files: [{ fileName, fileType, content }], metadata }，
 * Blinko 把文件写到服务端 .blinko/plugins/dev/ 并 System.import 加载。
 *
 * 用法：
 *   node tools/dev-server.mjs            # 默认 0.0.0.0:8080
 *   PORT=9000 node tools/dev-server.mjs
 */
import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RELEASE_DIR = path.join(ROOT, 'release');
const MANIFEST = path.join(ROOT, 'plugin.json');
const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || '0.0.0.0';
const WS_GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

/** @type {Set<import('node:net').Socket>} */
const clients = new Set();

function loadBundle() {
  const metadata = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const files = [];

  for (const name of fs.readdirSync(RELEASE_DIR)) {
    const full = path.join(RELEASE_DIR, name);
    if (!fs.statSync(full).isFile()) continue;

    const ext = path.extname(name).toLowerCase();
    if (ext === '.js') {
      files.push({ fileName: name, fileType: 'js', content: fs.readFileSync(full, 'utf8'), size: fs.statSync(full).size });
    } else if (ext === '.css') {
      files.push({ fileName: name, fileType: 'css', content: fs.readFileSync(full, 'utf8'), size: fs.statSync(full).size });
    }
  }

  // 主入口 index.js 必须排在前面（Blinko 用它作为 System.import 的入口）
  files.sort((a, b) => (a.fileName === 'index.js' ? -1 : b.fileName === 'index.js' ? 1 : 0));

  if (!files.some((f) => f.fileType === 'js')) {
    throw new Error('release/ 目录里没有 .js 入口文件');
  }

  return { metadata, files };
}

function payload() {
  const { metadata, files } = loadBundle();
  return JSON.stringify({
    type: 'code',
    files: files.map(({ fileName, fileType, content }) => ({ fileName, fileType, content })),
    metadata
  });
}

/** 服务端 → 客户端帧（不掩码） */
function encodeFrame(text) {
  const body = Buffer.from(text, 'utf8');
  const len = body.length;
  let head;

  if (len < 126) {
    head = Buffer.from([0x81, len]);
  } else if (len < 65536) {
    head = Buffer.alloc(4);
    head[0] = 0x81;
    head[1] = 126;
    head.writeUInt16BE(len, 2);
  } else {
    head = Buffer.alloc(10);
    head[0] = 0x81;
    head[1] = 127;
    head.writeBigUInt64BE(BigInt(len), 2);
  }

  return Buffer.concat([head, body]);
}

function broadcast(reason) {
  const data = payload();
  for (const socket of clients) {
    try {
      socket.write(encodeFrame(data));
    } catch {
      clients.delete(socket);
    }
  }
  if (clients.size > 0) console.log(`[~] ${reason}：已推送给 ${clients.size} 个 Blinko 客户端`);
}

function lanAddresses() {
  const out = [];
  const nets = os.networkInterfaces();
  for (const list of Object.values(nets)) {
    for (const net of list || []) {
      if (net.family === 'IPv4' && !net.internal) out.push(net.address);
    }
  }
  return out;
}

const server = http.createServer((req, res) => {
  let bundle;
  try {
    bundle = loadBundle();
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(String(err.message || err));
    return;
  }

  const rows = bundle.files
    .map((f) => `<li><code>${f.fileName}</code> · ${f.fileType} · ${(f.size / 1024).toFixed(1)} KB</li>`)
    .join('');

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><meta charset="utf-8"><title>Blinko 本地插件服务</title>
<style>body{font:14px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif;max-width:640px;margin:48px auto;padding:0 20px;color:#111}
code{background:#f2f2f4;padding:1px 5px;border-radius:4px}li{margin:2px 0}.ok{color:#1DB954;font-weight:600}</style>
<h2>Blinko 本地插件服务</h2>
<p class="ok">● 运行中</p>
<p>插件：<b>${bundle.metadata.displayName?.zh || bundle.metadata.name}</b> v${bundle.metadata.version}</p>
<p>在 Blinko 里填写 WebSocket 地址：</p>
<ul>
  <li><code>ws://localhost:${PORT}</code>（Blinko 与浏览器都在本机）</li>
  ${lanAddresses().map((ip) => `<li><code>ws://${ip}:${PORT}</code>（同一局域网）</li>`).join('')}
</ul>
<p>当前推送的文件：</p>
<ul>${rows}</ul>
<p>当前连接数：<b>${clients.size}</b></p>`);
});

server.on('upgrade', (req, socket) => {
  const key = req.headers['sec-websocket-key'];
  if (!key) {
    socket.destroy();
    return;
  }

  const accept = crypto.createHash('sha1').update(key + WS_GUID).digest('base64');
  socket.write(
    'HTTP/1.1 101 Switching Protocols\r\n' +
    'Upgrade: websocket\r\n' +
    'Connection: Upgrade\r\n' +
    'Sec-WebSocket-Accept: ' + accept + '\r\n\r\n'
  );
  socket.setNoDelay(true);
  clients.add(socket);

  try {
    socket.write(encodeFrame(payload()));
  } catch (err) {
    console.error('推送失败：', err.message);
  }

  console.log(`[+] Blinko 已连接（${clients.size}）`);

  socket.on('data', (buf) => {
    // 客户端发来的 Close 帧
    if (buf.length && (buf[0] & 0x0f) === 0x8) socket.end();
  });
  socket.on('close', () => {
    clients.delete(socket);
    console.log(`[-] 连接断开（${clients.size}）`);
  });
  socket.on('error', () => clients.delete(socket));
});

// 文件变更自动热重载
let watchTimer = null;
function scheduleBroadcast() {
  clearTimeout(watchTimer);
  watchTimer = setTimeout(() => {
    try {
      broadcast('检测到文件变更');
    } catch (err) {
      console.error('广播失败：', err.message);
    }
  }, 200);
}

try {
  fs.watch(RELEASE_DIR, { persistent: true }, scheduleBroadcast);
  fs.watch(MANIFEST, { persistent: true }, scheduleBroadcast);
} catch (err) {
  console.warn('文件监听不可用，热重载关闭：', err.message);
}

// 心跳，避免中间代理把长连接掐掉
setInterval(() => {
  for (const socket of clients) {
    try {
      socket.write(Buffer.from([0x89, 0x00]));
    } catch {
      clients.delete(socket);
    }
  }
}, 25000);

server.listen(PORT, HOST, () => {
  console.log('');
  console.log('  Blinko 本地插件服务已启动');
  console.log('  ────────────────────────────────');
  console.log(`  本机:   ws://localhost:${PORT}`);
  for (const ip of lanAddresses()) console.log(`  局域网: ws://${ip}:${PORT}`);
  console.log('  页面:   http://localhost:' + PORT);
  console.log('');
  console.log('  在 Blinko：设置 → 插件 → 本地开发 → 添加本地插件，粘贴上面的地址');
  console.log('  修改 release/index.js 会自动热重载；Ctrl+C 结束');
  console.log('');
});

process.on('SIGINT', () => {
  console.log('\n正在关闭…');
  for (const socket of clients) {
    try { socket.destroy(); } catch { /* noop */ }
  }
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 500);
});
