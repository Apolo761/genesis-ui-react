import { createElement, forwardRef, type HTMLAttributes } from 'react';
import { skeleton } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  animate?: boolean;
  decorative?: boolean;
  duration?: number;
  label?: string | null;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  variant?: 'shimmer' | 'fade' | 'none';
}
const useOriginalSkeleton = skeleton.Skeleton.render;

/** Same source surface, shimmer/fade and reduced-motion CSS, safe inside text. */
export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(function Skeleton({className, ...props}, ref) {
  const scope = useUiClass('g-ref');
  const original = useOriginalSkeleton({...props, className}, ref);
  return createElement('span', {
    ...original.props, ref, className: `${original.props.className} ${scope}`,
    'data-slot': 'skeleton',
  });
});
export function SkeletonText({className = '', ...props}: SkeletonProps) {
  return <Skeleton className={`h-3 ${className}`} {...props} />;
}
export function SkeletonAvatar({className = '', ...props}: SkeletonProps) {
  return <Skeleton className={`size-10 ${className}`} rounded="full" {...props} />;
}
export function SkeletonButton({className = '', ...props}: SkeletonProps) {
  return <Skeleton className={`h-9 w-24 ${className}`} rounded="lg" {...props} />;
}
