import { forwardRef, type ComponentType, type HTMLAttributes, type ReactNode, type RefAttributes } from 'react';
import { progress } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

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

const Reference = progress.Progress as unknown as ComponentType<ProgressBarProps & RefAttributes<HTMLDivElement>>;

/** Original library header, rounded track, spring fill and indeterminate glow. */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(function ProgressBar({ className, ...props }, ref) {
  return <Reference {...props} ref={ref} className={useUiClass(`g-ref g-progress-bar ${className ?? ''}`)} />;
});
