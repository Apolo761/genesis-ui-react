#!/usr/bin/env node
import { createReadStream } from 'node:fs';
import { access, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const demoRoot = resolve(packageRoot, 'demo');
const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.jpeg', 'image/jpeg'],
  ['.jpg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.mp4', 'video/mp4'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.webp', 'image/webp'],
]);

function respondWithFile(request, response) {
  let url;
  try {
    url = new URL(request.url ?? '/', 'http://localhost');
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }

  if (url.pathname === '/' || url.pathname === '/demo') {
    response.writeHead(302, { Location: '/demo/index.html#button' }).end();
    return;
  }

  if (!url.pathname.startsWith('/demo/')) {
    response.writeHead(404).end('Not found');
    return;
  }

  let requestedPath;
  try {
    requestedPath = decodeURIComponent(url.pathname.slice('/demo/'.length));
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }

  const filePath = resolve(demoRoot, requestedPath);
  if (filePath !== demoRoot && !filePath.startsWith(`${demoRoot}${sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }

  access(filePath).then(() => stat(filePath)).then(fileInfo => {
    if (!fileInfo.isFile()) {
      response.writeHead(404).end('Not found');
      return;
    }
    response.writeHead(200, {
      'Content-Length': fileInfo.size,
      'Content-Type': contentTypes.get(extname(filePath).toLowerCase()) ?? 'application/octet-stream',
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    if (request.method === 'HEAD') response.end();
    else createReadStream(filePath).pipe(response);
  }).catch(() => response.writeHead(404).end('Not found'));
}

const requestedPort = Number(process.env.GENESIS_UI_DEMO_PORT ?? 5174);
if (!Number.isInteger(requestedPort) || requestedPort < 1 || requestedPort > 65535) {
  throw new Error('GENESIS_UI_DEMO_PORT must be a valid TCP port.');
}

let server;
let port = requestedPort;
while (port <= 65535) {
  server = createServer(respondWithFile);
  try {
    await new Promise((resolveListen, rejectListen) => {
      const onError = error => {
        server.off('listening', onListening);
        rejectListen(error);
      };
      const onListening = () => {
        server.off('error', onError);
        resolveListen();
      };
      server.once('error', onError);
      server.once('listening', onListening);
      server.listen(port, '127.0.0.1');
    });
    break;
  } catch (error) {
    server.close();
    if (error.code !== 'EADDRINUSE') throw error;
    port += 1;
  }
}

if (!server?.listening) throw new Error('No local port is available for the demo.');
console.log(`Genesis UI demo: http://localhost:${port}/demo/index.html#button`);
console.log('Press Ctrl+C to stop the local server.');
