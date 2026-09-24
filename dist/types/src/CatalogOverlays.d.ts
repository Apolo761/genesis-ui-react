import { type ReactNode } from 'react';
export declare function Popover({ trigger, children, open, onOpenChange, title, disabled }: {
    trigger: ReactNode;
    children: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
    disabled?: boolean;
}): import("react").JSX.Element;
export declare function Tooltip({ label, children, side }: {
    label: string;
    children: ReactNode;
    side?: 'top' | 'bottom';
}): import("react").JSX.Element;
export declare function Drawer({ open, onOpenChange, title, description, children, side, closeLabel }: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    children: ReactNode;
    side?: 'right' | 'left';
    closeLabel?: string;
}): import("react").JSX.Element | null;
export declare function AlertDialog({ open, onOpenChange, title, description, confirmLabel, cancelLabel, onConfirm, pending, tone }: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void | Promise<void>;
    pending?: boolean;
    tone?: 'danger' | 'primary';
}): import("react").JSX.Element;
export type MenuAction = {
    id: string;
    label: string;
    onSelect: () => void;
    disabled?: boolean;
    icon?: ReactNode;
    danger?: boolean;
};
export declare function ContextMenu({ children, actions, label }: {
    children: ReactNode;
    actions: MenuAction[];
    label?: string;
}): import("react").JSX.Element;
export declare function CommandMenu({ open, onOpenChange, commands, title, placeholder }: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    commands: (MenuAction & {
        keywords?: string[];
    })[];
    title?: string;
    placeholder?: string;
}): import("react").JSX.Element;
export declare function Toast({ title, message, tone, onDismiss, duration, action }: {
    title: string;
    message?: string;
    tone?: 'info' | 'success' | 'warning' | 'danger';
    onDismiss?: () => void;
    duration?: number;
    action?: ReactNode;
}): import("react").JSX.Element;
