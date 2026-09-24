import { cloneElement, createContext, forwardRef, useContext, useId, type ButtonHTMLAttributes, type HTMLAttributes, type ReactElement } from 'react';
import { tabs } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

const TabContext = createContext('standalone');
/** Compound adapter over RareTabs. Keeps existing panel IDs, refs and callbacks
 * while sharing the original indicator and keyboard behavior across the app. */
export function TabList({ className, onKeyDown, ...props }: HTMLAttributes<HTMLDivElement>) {
  const id = useId();
  return <TabContext.Provider value={id}><div {...props} className={useUiClass(`g-ref rare-tabs g-tablist ${className ?? ''}`)} role="tablist" onKeyDown={event => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)'));
    const index = controls.indexOf(event.target as HTMLButtonElement);
    const next = event.key === 'ArrowRight' ? (index + 1) % controls.length : event.key === 'ArrowLeft' ? (index + controls.length - 1) % controls.length : event.key === 'Home' ? 0 : event.key === 'End' ? controls.length - 1 : -1;
    if (next < 0 || !controls[next]) return;
    event.preventDefault(); controls[next].click(); controls[next].focus();
  }} /></TabContext.Provider>;
}
const useReferenceTabs = tabs.RareTabs;
export const Tab = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(function Tab({ children, ...props }, ref) {
  const group = useContext(TabContext);
  const selected = props['aria-selected'] === true || props['aria-selected'] === 'true';
  const result = useReferenceTabs({options:[{value:'item',label:children}], value:selected ? 'item' : '', onChange:()=>{}});
  const button = result.props.children[0] as ReactElement;
  const content = (button.props.children as ReactElement[]).map((child,index) => child ? cloneElement(child, {key:index, ...(child.props.className === 'rare-tabs__indicator' ? {layoutId:`${group}-indicator`} : {})}) : null);
  // The recovered single-option tabs handle arrow keys themselves. Let the
  // compound TabList handle them across all application tabs instead.
  return cloneElement(button, { ...props, onKeyDown: props.onKeyDown, ref, children:content });
});
