import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { navigation } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

const HookSidebar = navigation.HookSidebar;
export interface SidebarItem { label: ReactNode; onSelect: () => void }
export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  items: SidebarItem[];
  activeIndex: number;
  label: string;
  header?: ReactNode;
  footer?: ReactNode;
}
/** The reference Hook Sidebar, driven by application callbacks (no Next router).
 * Shell placement and mobile visibility remain under the host layout's control. */
export const Sidebar = forwardRef<HTMLElement, SidebarProps>(function Sidebar({ items, activeIndex, label, header, footer, className, ...props }, ref) {
  const navClass = useUiClass('g-ref g-sidebar-nav');
  return <aside {...props} ref={ref} className={`g-sidebar-shell ${className ?? ''}`}>
    {header}
    <HookSidebar items={items.map(item => ({ label: item.label }))} value={activeIndex} label={label} onChange={(index: number) => items[index]?.onSelect()} color="var(--g-accent)" className={navClass} />
    {footer}
  </aside>;
});
