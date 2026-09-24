import { type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
type RegionProps = HTMLAttributes<HTMLElement>;
type ActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode;
    shortcut?: ReactNode;
    badge?: ReactNode;
};
/** The original context, keyboard shortcut and width spring; no host layout clone. */
export declare function AppSidebarProvider({ className, ...props }: {
    children: ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    width?: string;
    variant?: 'sidebar' | 'floating' | 'inset';
    shortcut?: string;
    className?: string;
}): import("react").JSX.Element;
export declare const AppSidebar: ({ className, ...props }: RegionProps) => import("react").JSX.Element;
export declare const AppSidebarInset: ({ className, ...props }: RegionProps) => import("react").JSX.Element;
export declare const AppSidebarHeader: ({ className, ...props }: RegionProps) => import("react").JSX.Element;
export declare const AppSidebarContent: ({ className, ...props }: RegionProps) => import("react").JSX.Element;
export declare const AppSidebarFooter: ({ className, ...props }: RegionProps) => import("react").JSX.Element;
export declare const AppSidebarSeparator: ({ className, ...props }: RegionProps) => import("react").JSX.Element;
export declare const AppSidebarTrigger: ({ className, ...props }: ActionProps) => import("react").JSX.Element;
export declare const AppSidebarAction: ({ className, ...props }: ActionProps) => import("react").JSX.Element;
export declare const AppSidebarFooterItem: ({ className, ...props }: ActionProps) => import("react").JSX.Element;
/** Exact footer compositions from the reference, including its Megaphone glyph. */
export declare function AppSidebarSettingsItem(props: Omit<ActionProps, 'icon'>): import("react").JSX.Element;
export declare function AppSidebarNewsItem({ badge, ...props }: Omit<ActionProps, 'icon'>): import("react").JSX.Element;
export declare function NewsIcon({ size }: {
    size?: number;
}): import("react").JSX.Element;
export declare function AppSidebarBrand({ className, ...props }: {
    mark: ReactNode;
    name: ReactNode;
    action?: ReactNode;
    onSearch?: () => void;
    className?: string;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare function AppSidebarUser({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string;
    email?: string;
    src?: string;
}): import("react").JSX.Element;
export declare function AppSidebarGroup({ className, ...props }: {
    label: string;
    items: Array<{
        label: ReactNode;
    }>;
    value: number;
    onChange: (index: number) => void;
    className?: string;
}): import("react").JSX.Element;
export interface BreadcrumbItem {
    label: ReactNode;
    href?: string;
    icon?: ReactNode;
    title?: string;
}
/** Original animated levels, chevrons, truncation and keyboard overflow menu.
 * Delegation also handles links inside the original collapsed menu. */
export declare function Breadcrumbs({ className, onNavigate, ...props }: Omit<HTMLAttributes<HTMLElement>, 'onChange'> & {
    items: BreadcrumbItem[];
    ariaLabel?: string;
    maxItems?: number;
    truncate?: boolean;
    onNavigate?: (href: string) => void;
}): import("react").JSX.Element;
export {};
