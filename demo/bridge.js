// Deployment adapter only: component behaviour lives in the untouched bundles.
(() => {
  const announce = () => {
    const input = document.querySelector('.catalogue-search input');
    const stage = document.querySelector('.component-stage');
    if (!input || !Object.keys(input).some((key) => key.startsWith('__reactProps$')) ||
        !stage?.children.length || stage.textContent.includes('Carregando componente…')) return false;
    window.parent.postMessage({ type: 'genesis-demo:ready', source: 'local' }, window.location.origin);
    return true;
  };
  window.addEventListener('load', announce);
  let attempts = 0;
  const timer = window.setInterval(() => {
    if (announce() || ++attempts >= 100) window.clearInterval(timer);
  }, 100);
  window.addEventListener('hashchange', () => {
    window.parent.postMessage({ type: 'genesis-demo:hash', hash: location.hash }, location.origin);
  });
})();
