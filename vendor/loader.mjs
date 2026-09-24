import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PortalScope } from './portal-scope.mjs';
import * as JSX from 'react/jsx-runtime';
import { factories } from './factories.mjs';
import { catalogFactories } from './catalog-factories.mjs';
import { iconModules } from './icon-modules.mjs';
import { brandModules } from './brand-modules.mjs';

// Synchronous linker for the recovered modules. No Next/Turbopack runtime,
// eval, fetch, script insertion, global registration or duplicate React.
const Link = React.forwardRef(function Link({ href, prefetch: _prefetch, replace: _replace, scroll: _scroll, ...props }, ref) {
  return React.createElement('a', { ...props, ref, href: typeof href === 'string' ? href : href?.pathname });
});
const pathname = () => typeof window === 'undefined' ? '/' : window.location.pathname;
const watchPath = (notify) => { window.addEventListener('popstate', notify); return () => window.removeEventListener('popstate', notify); };
const scopedReactDOM = {...ReactDOM, createPortal: (children, container, key) => ReactDOM.createPortal(React.createElement(PortalScope, null, children), container, key)};
const external = new Map([[71645, React], [43476, JSX], [74080, scopedReactDOM], [22016, { default: Link }], [18566, { usePathname: () => React.useSyncExternalStore(watchPath, pathname, () => '/') }]]);
const groups = new Map();
const cache = new Map();
for (const [ids, factory] of [...factories, ...catalogFactories]) {
  const group = { ids, factory, initialized: false };
  for (const id of ids) groups.set(id, group);
}
function record(id) {
  if (!cache.has(id)) cache.set(id, { exports: {} });
  return cache.get(id);
}
function requireModule(id) {
  if (external.has(id)) return external.get(id);
  const group = groups.get(id);
  if (!group) throw new Error(`Genesis UI: missing pinned module ${id}`);
  const module = record(id);
  if (!group.initialized) {
    group.initialized = true;
    group.ids.forEach(record);
    const primary = record(group.ids[0]);
    try {
      group.factory({
        g: globalThis,
        i: (id) => {
          const value = requireModule(id);
          return value.__esModule || external.has(id) ? value : Object.assign({ default: value }, value);
        },
        r: requireModule,
        s: (entries, target = group.ids[0]) => {
          const exports = record(target).exports;
          if (!exports.__esModule) Object.defineProperty(exports, '__esModule', { value: true });
          for (let i = 0; i < entries.length;) {
            const name = entries[i++];
            const value = entries[i++];
            const descriptor = value === 0 ? { value: entries[i++] } : { get: value };
            if (value !== 0 && typeof entries[i] === 'function') descriptor.set = entries[i++];
            if (!Object.hasOwn(exports, name)) Object.defineProperty(exports, name, { ...descriptor, enumerable: true });
          }
        },
      }, primary, primary.exports);
    } catch (error) {
      group.error = error;
      throw error;
    }
  }
  if (group.error) throw group.error;
  return module.exports;
}

export const primitives = requireModule(61998);
export const motion = requireModule(32181).motion;
export const useReducedMotion = requireModule(72328).useReducedMotion;
export const buttons = requireModule(47862);
export const flux = requireModule(13088);
export const icons = requireModule(12858);
export const fields = requireModule(40259);
export const selection = requireModule(51330);
export const combobox = requireModule(11817);
export const baseCombobox = requireModule(25933).Combobox;
export const feedback = requireModule(16839);
export const progress = requireModule(68148);
export const skeleton = requireModule(2747);
export const accordion = requireModule(73443);
export const avatar = requireModule(99676);
export const tabs = requireModule(53765);
export const navigation = requireModule(30909);
export const appSidebar = requireModule(900001);
export const breadcrumbs = requireModule(900002);
export const settings = requireModule(900003);
export const dataTable = requireModule(900004);
export const assetPicker = requireModule(900005);
export const animatedIcons = Object.fromEntries(Object.entries(iconModules).map(([name, id]) => [name, requireModule(id)[name]]));
export const brandIcons = requireModule(37000).BRANDS.map(brand => ({ ...brand, Icon: requireModule(brandModules[brand.name])[brand.name] }));

export const socialAgent = requireModule(79957);

export const chatComposer = requireModule(900006);

export const reasoningSteps = requireModule(900007);
export const fileUpload = requireModule(900008);
export const mediaPreview = requireModule(900009);

export const streamingText = requireModule(91235);

export const thinkingIndicator = requireModule(9424);

export const alerts = requireModule(900010);
export const folder = requireModule(900011);

export const buttonGroup = requireModule(47862);
export const fluxButton = requireModule(13088);
export const automation = requireModule(18037);
export const emptyStates = requireModule(97654);
export const drawer = requireModule(26999);
export const popover = requireModule(40259);
export const contextMenu = requireModule(21762);
export const gooeyNav = requireModule(45287);
export const deleteButton = requireModule(55220);
export const gridReveal = requireModule(67077);
export const videoControls = requireModule(78909);
export const animatedCounter = requireModule(73792);
