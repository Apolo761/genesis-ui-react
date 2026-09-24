import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import vm from 'node:vm';

const sourceDirectory = process.argv[2];
if (!sourceDirectory) throw new Error('Usage: node scripts/recover-catalog.mjs <captured-chunks-directory>');

const existing = JSON.parse(await readFile('vendor/provenance.json', 'utf8'));
const pinned = new Set(existing.factories.flatMap(factory => factory.ids));
const external = new Set([71645, 43476, 74080, 22016, 18566]);
const targets = [55220, 45287, 67077, 26999, 18037];
const modules = new Map();

for (const name of (await readdir(sourceDirectory)).filter(name => name.endsWith('.js')).sort()) {
  const source = await readFile(join(sourceDirectory, name), 'utf8');
  const sandbox = { globalThis: { TURBOPACK: [] } };
  try {
    vm.runInNewContext(source, sandbox, { filename: name, timeout: 1000 });
  } catch {
    // Next runtime/polyfill files are not component module registrations.
    continue;
  }
  for (const chunk of sandbox.globalThis.TURBOPACK) {
    for (let index = 1; index < chunk.length; index += 2) {
      const ids = Array.isArray(chunk[index]) ? chunk[index] : [chunk[index]];
      const factory = chunk[index + 1];
      if (typeof factory !== 'function') continue;
      const group = { ids, factory: String(factory), source: basename(name) };
      for (const id of ids) if (!modules.has(id)) modules.set(id, group);
    }
  }
}

const selected = new Set();
function include(id) {
  if (pinned.has(id) || external.has(id)) return;
  const group = modules.get(id);
  if (!group) throw new Error(`Missing captured module ${id}`);
  if (selected.has(group)) return;
  selected.add(group);
  for (const match of group.factory.matchAll(/\be\.(?:i|r)\((\d+)\)/g)) include(Number(match[1]));
}
for (const id of targets) include(id);

const groups = [...selected].sort((left, right) => left.ids[0] - right.ids[0]);
const code = `// Additional pinned reference components from the local catalog.\nexport const catalogFactories = [\n${groups.map(group => `  [${JSON.stringify(group.ids)}, ${group.factory}],`).join('\n')}\n];\n`;
await writeFile('vendor/catalog-factories.mjs', code);
await writeFile('vendor/catalog-provenance.json', `${JSON.stringify({ targets, groups: groups.map(group => ({ ids: group.ids, source: group.source, sha256: createHash('sha256').update(group.factory).digest('hex') })) }, null, 2)}\n`);
console.log(`Recovered ${groups.length} extra factory groups`);
