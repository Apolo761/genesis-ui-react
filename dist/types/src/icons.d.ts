import type { CSSProperties, Ref } from 'react';
export type LegacyIconName = "arrow" | "arrowUp" | "people" | "layers" | "chart" | "lock" | "eye" | "eyeOff" | "close" | "menu" | "check" | "logout" | "globe" | "sun" | "moon" | "search" | "home" | "flask" | "history" | "center_focus_strong" | "view_list";
export interface IconAnimationHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}
export interface IconProps {
    name: string;
    size?: number;
    className?: string;
    label?: string;
    style?: CSSProperties;
    /** Opt in to controlling the original animation from a parent interaction. */
    animationRef?: Ref<IconAnimationHandle>;
}
/** Original animated SVGs, with local semantic extensions for app-only glyphs. */
export declare function Icon({ name, size, className, label, style, animationRef }: IconProps): import("react").JSX.Element;
