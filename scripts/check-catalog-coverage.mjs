import { readFile } from 'node:fs/promises';
import * as ui from '../dist/index.js';

const map = JSON.parse(await readFile('docs/catalog-map.json', 'utf8'));
const entries = map.sections.flatMap(section => section.items.map(item => ({ section: section.name, ...item })));
if (entries.length !== 83) throw new Error(`Expected 83 catalog entries; found ${entries.length}`);

const missingExports = entries.flatMap(item => item.exports.filter(name => !(name in ui)).map(name => `${item.section}: ${item.label} → ${name}`));
if (missingExports.length) throw new Error(`Missing public exports:\n${missingExports.join('\n')}`);

if (process.argv[2]) {
  const html = await readFile(process.argv[2], 'utf8');
  const catalog = html.split('<div class="catalogue-sections">', 2)[1]?.split('</aside>', 1)[0];
  if (!catalog) throw new Error('Could not locate the local catalog sidebar');
  const reference = [];
  const decode = value => value.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/<[^>]*>/g, '').trim();
  for (const [, section, , content] of catalog.matchAll(/<section><button class="catalogue-section-toggle"[^>]*><span>(.*?)<\/span><small>(\d+)<\/small>[\s\S]*?<\/button>([\s\S]*?)<\/section>/g)) {
    for (const [, label] of content.matchAll(/<button data-slot="hook-sidebar-item"[^>]*>(.*?)<\/button>/g)) {
      reference.push(`${section}: ${decode(label).replace(/^[●○]\s*/, '')}`);
    }
  }
  const mapped = entries.map(item => `${item.section}: ${item.label}`);
  if (reference.length !== mapped.length || reference.some((item, index) => item !== mapped[index])) {
    throw new Error(`Catalog changed or mapping differs. Reference: ${reference.length}; mapped: ${mapped.length}.\n${reference.filter((item, index) => item !== mapped[index]).slice(0, 12).join('\n')}`);
  }
}
console.log(`Catalog coverage: ${entries.length} entries, ${new Set(entries.flatMap(item => item.exports)).size} public exports`);
