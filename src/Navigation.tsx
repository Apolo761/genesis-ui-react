import { cloneElement, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
import { appSidebar, breadcrumbs, icons } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

type RegionProps = HTMLAttributes<HTMLElement>;
type ActionProps = ButtonHTMLAttributes<HTMLButtonElement> & { icon?: ReactNode; shortcut?: ReactNode; badge?: ReactNode };
function region(name: string, rootOnly = false) {
  const Component = appSidebar[name];
  return function Region({ className, ...props }: RegionProps) {
    return <Component {...props} className={useUiClass(`${rootOnly ? 'g-ref-self' : 'g-ref'} ${className ?? ''}`)} />;
  };
}
function action(name: string) {
  const Component = appSidebar[name];
  return function Action({ className, ...props }: ActionProps) {
    return <Component {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />;
  };
}
/** The original context, keyboard shortcut and width spring; no host layout clone. */
export function AppSidebarProvider({ className, ...props }: {
  children: ReactNode; open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void;
  width?: string; variant?: 'sidebar' | 'floating' | 'inset'; shortcut?: string; className?: string;
}) {
  const Component = appSidebar.AppSidebarProvider;
  return <Component {...props} className={useUiClass(`g-ref-self ${className ?? ''}`)} />;
}
export const AppSidebar = region('AppSidebar');
// Root-only scope is essential: nested feature pages must not inherit the
// reference demo's reset. In particular the protected journey keeps its layout.
export const AppSidebarInset = region('AppSidebarInset', true);
export const AppSidebarHeader = region('AppSidebarHeader');
export const AppSidebarContent = region('AppSidebarContent');
export const AppSidebarFooter = region('AppSidebarFooter');
export const AppSidebarSeparator = region('AppSidebarSeparator');
export const AppSidebarTrigger = action('AppSidebarTrigger');
export const AppSidebarAction = action('AppSidebarAction');
export const AppSidebarFooterItem = action('AppSidebarFooterItem');
/** Exact footer compositions from the reference, including its Megaphone glyph. */
export function AppSidebarSettingsItem(props: Omit<ActionProps, 'icon'>) {
  const Glyph = icons.Settings2;
  return <AppSidebarFooterItem {...props} icon={<Glyph size={16} />} />;
}
export function AppSidebarNewsItem({ badge, ...props }: Omit<ActionProps, 'icon'>) {
  const Glyph = appSidebar.AppSidebarNewsIcon;
  return <AppSidebarFooterItem {...props} icon={<Glyph />} badge={badge ? <span style={{ color: 'var(--g-on-accent)' }}>{badge}</span> : badge} />;
}
export function NewsIcon({size=16}: {size?:number}) {
  const Glyph = appSidebar.AppSidebarNewsIcon;
  return <span className={useUiClass('g-ref g-icon')}><Glyph size={size}/></span>;
}
export function AppSidebarBrand({ className, ...props }: { mark: ReactNode; name: ReactNode; action?: ReactNode; onSearch?: () => void; className?: string }) {
  const element = appSidebar.AppSidebarBrand(props);
  return cloneElement(element, {className:`${element.props.className} ${className ?? ''}`});
}
export function AppSidebarUser({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { name: string; email?: string; src?: string }) {
  const Component = appSidebar.AppSidebarUser;
  return <Component {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />;
}
export function AppSidebarGroup({ className, ...props }: { label: string; items: Array<{ label: ReactNode }>; value: number; onChange: (index: number) => void; className?: string }) {
  const Component = appSidebar.AppSidebarGroup;
  return <Component {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />;
}
export interface BreadcrumbItem { label: ReactNode; href?: string; icon?: ReactNode; title?: string }
/** Original animated levels, chevrons, truncation and keyboard overflow menu.
 * Delegation also handles links inside the original collapsed menu. */
export function Breadcrumbs({ className, onNavigate, ...props }: Omit<HTMLAttributes<HTMLElement>, 'onChange'> & {
  items: BreadcrumbItem[]; ariaLabel?: string; maxItems?: number; truncate?: boolean;
  onNavigate?: (href: string) => void;
}) {
  const Component = breadcrumbs.Breadcrumbs;
  return <Component {...props} className={useUiClass(`g-ref ${className ?? ''}`)} onClick={(event: React.MouseEvent<HTMLElement>) => {
    props.onClick?.(event);
    const anchor = (event.target as Element).closest('a');
    if (!onNavigate || !anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate(anchor.getAttribute('href') ?? '/app');
  }} />;
}
