import { type HTMLAttributes, type ReactNode, type RefAttributes } from 'react';
export interface ProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    value: number | null;
    min?: number;
    max?: number;
    label?: ReactNode;
    helper?: ReactNode;
    ariaLabel?: string;
    indeterminateLabel?: string;
    showValue?: boolean;
    size?: 'sm' | 'md' | 'lg';
    tone?: 'default' | 'brand' | 'destructive' | 'success';
}
/** Original library header, rounded track, spring fill and indeterminate glow. */
export declare const ProgressBar: import("react").ForwardRefExoticComponent<ProgressBarProps & RefAttributes<HTMLDivElement>>;
