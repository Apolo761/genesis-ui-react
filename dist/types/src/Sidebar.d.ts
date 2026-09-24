import { type HTMLAttributes, type ReactNode } from 'react';
export interface SidebarItem {
    label: ReactNode;
    onSelect: () => void;
}
export interface SidebarProps extends HTMLAttributes<HTMLElement> {
    items: SidebarItem[];
    activeIndex: number;
    label: string;
    header?: ReactNode;
    footer?: ReactNode;
}
/** The reference Hook Sidebar, driven by application callbacks (no Next router).
 * Shell placement and mobile visibility remain under the host layout's control. */
export declare const Sidebar: import("react").ForwardRefExoticComponent<SidebarProps & import("react").RefAttributes<HTMLElement>>;
