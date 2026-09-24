import type { ReactNode } from 'react';
/** Pinned library alert, kept inline and persistent inside notification lists. */
export declare function Alert({ title, message, icon, appearance, action }: {
    title: string;
    message: string;
    icon?: ReactNode;
    appearance?: 'info' | 'success' | 'warning' | 'error';
    action?: ReactNode;
}): import("react").JSX.Element;
