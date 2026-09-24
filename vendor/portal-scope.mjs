import * as React from 'react';

const listeners = new Set();
let observer;
const snapshot = () => typeof document !== 'undefined' && document.documentElement.classList.contains('light') ? 'light' : 'dark';
function subscribe(listener) {
  listeners.add(listener);
  if (!observer && typeof MutationObserver !== 'undefined') {
    observer = new MutationObserver(() => listeners.forEach(notify => notify()));
    observer.observe(document.documentElement, {attributes:true,attributeFilter:['class']});
  }
  return () => {
    listeners.delete(listener);
    if (!listeners.size) {observer?.disconnect();observer=undefined;}
  };
}
export function useUiTheme() {
  return React.useSyncExternalStore(subscribe,snapshot,()=>'dark');
}
/** Every original portaled menu/dialog keeps its CSS boundary and theme.
 * display:contents introduces no box, containing block or stacking context;
 * source positioning, z-index, focus guards and animations remain unchanged. */
export function PortalScope({children}) {
  const theme=useUiTheme();
  return React.createElement('div',{'data-g-portal-scope':'',className:`g-ui g-ref ${theme}`,style:{display:'contents'}},children);
}
