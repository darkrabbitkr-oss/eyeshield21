import fs from 'node:fs';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const RELEASE_DIR = fileURLToPath(new URL('../eyeshield21-fan/release', import.meta.url));

const ALLOWED_FILES = new Set<string>([
  'Eyeshield21-TacticalManager-0.3.2-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.3.2-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.3.2-x64.exe',
  'Eyeshield21-TacticalManager-0.3.2-android.apk',
  'Eyeshield21-TacticalManager-0.3.1-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.3.1-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.3.1-x64.exe',
  'Eyeshield21-TacticalManager-0.3.1-android.apk',
  'Eyeshield21-TacticalManager-0.3.0-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.3.0-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.3.0-x64.exe',
  'Eyeshield21-TacticalManager-0.3.0-android.apk',
  'Eyeshield21-TacticalManager-0.2.3-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.2.3-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.2.3-x64.exe',
  'Eyeshield21-TacticalManager-0.2.3-android.apk',
  'Eyeshield21-TacticalManager-0.2.2-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.2.2-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.2.2-x64.exe',
  'Eyeshield21-TacticalManager-0.2.2-android.apk',
  'Eyeshield21-TacticalManager-0.1.5-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.1.5-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.1.5-x64.exe',
  'Eyeshield21-TacticalManager-0.1.5-android.apk',
  'Eyeshield21-TacticalManager-0.1.4-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.1.4-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.1.4-x64.exe',
  'Eyeshield21-TacticalManager-0.1.4-android.apk',
  'Eyeshield21-TacticalManager-0.1.3-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.1.3-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.1.3-x64.exe',
  'Eyeshield21-TacticalManager-0.1.3-android.apk',
  'Eyeshield21-TacticalManager-0.1.2-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.1.2-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.1.2-x64.exe',
  'Eyeshield21-TacticalManager-0.1.2-android.apk',
  'Eyeshield21-TacticalManager-0.1.1-arm64.dmg',
  'Eyeshield21-TacticalManager-Setup-0.1.1-x64.exe',
  'Eyeshield21-TacticalManager-Portable-0.1.1-x64.exe',
  'Eyeshield21-TacticalManager-0.1.1-android.apk',
  'Eyeshield21-TacticalManager-0.1.0-arm64.dmg',
]);

function handleDownloadRequest(req: IncomingMessage, res: ServerResponse): void {
  const urlPath = (req.url ?? '').split('?')[0];
  let filename = '';
  try {
    filename = decodeURIComponent(urlPath.replace(/^\/+/, ''));
  } catch {
    res.statusCode = 400;
    res.end('Bad Request');
    return;
  }

  if (!filename || !ALLOWED_FILES.has(filename)) {
    res.statusCode = 404;
    res.end('Not Found');
    return;
  }

  const filePath = path.join(RELEASE_DIR, filename);
  let stat: fs.Stats;
  try {
    stat = fs.statSync(filePath);
  } catch {
    res.statusCode = 404;
    res.end('Not Found');
    return;
  }

  if (!stat.isFile()) {
    res.statusCode = 404;
    res.end('Not Found');
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Content-Length', String(stat.size));
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'HEAD') {
    res.end();
    return;
  }

  const stream = fs.createReadStream(filePath);
  stream.on('error', () => {
    if (!res.headersSent) {
      res.statusCode = 500;
    }
    res.end();
  });
  stream.pipe(res);
}

function localDownloadsPlugin(): Plugin {
  return {
    name: 'es21-local-downloads',
    configureServer(server) {
      server.middlewares.use('/downloads', handleDownloadRequest);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/downloads', handleDownloadRequest);
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [localDownloadsPlugin()],
});
