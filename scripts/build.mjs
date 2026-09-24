import { build } from 'esbuild';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

await build({
  entryPoints: ['src/public-entry.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2022',
  jsx: 'automatic',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  loader: { '.webp': 'dataurl' },
  logLevel: 'warning',
});

await rename('dist/index.css', 'dist/styles.css');
await build({
  entryPoints: ['src/foundations.css'],
  outfile: 'dist/foundations.css',
  bundle: true,
  logLevel: 'warning',
});
await writeFile('dist/tokens.json', await readFile('src/foundations.json'));

const tsc = spawnSync('node_modules/.bin/tsc', ['-p', 'tsconfig.json'], { stdio: 'inherit' });
if (tsc.status !== 0) process.exit(tsc.status ?? 1);
