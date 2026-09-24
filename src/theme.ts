import { useUiTheme } from '../vendor/portal-scope.mjs';
/** One observer for the whole package; portaled controls follow the same theme. */
export function useUiClass(className = '') {
  const theme = useUiTheme();
  return `g-ui ${theme} ${className}`;
}
export const FOCUS_RING = 'g-focus';
