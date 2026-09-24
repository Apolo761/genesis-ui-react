import type { ReactNode } from 'react';
export declare function Dialog({ open, onOpenChange, title, description, closeLabel, children, className }: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    closeLabel: string;
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
