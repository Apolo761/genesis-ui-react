import { type HTMLAttributes } from 'react';
export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
    animate?: boolean;
    decorative?: boolean;
    duration?: number;
    label?: string | null;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    variant?: 'shimmer' | 'fade' | 'none';
}
/** Same source surface, shimmer/fade and reduced-motion CSS, safe inside text. */
export declare const Skeleton: import("react").ForwardRefExoticComponent<SkeletonProps & import("react").RefAttributes<HTMLSpanElement>>;
export declare function SkeletonText({ className, ...props }: SkeletonProps): import("react").JSX.Element;
export declare function SkeletonAvatar({ className, ...props }: SkeletonProps): import("react").JSX.Element;
export declare function SkeletonButton({ className, ...props }: SkeletonProps): import("react").JSX.Element;
