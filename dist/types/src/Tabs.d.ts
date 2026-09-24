import { type ButtonHTMLAttributes, type HTMLAttributes } from 'react';
/** Compound adapter over RareTabs. Keeps existing panel IDs, refs and callbacks
 * while sharing the original indicator and keyboard behavior across the app. */
export declare function TabList({ className, onKeyDown, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare const Tab: import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
