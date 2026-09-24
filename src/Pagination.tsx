import { Children, cloneElement, isValidElement, type ButtonHTMLAttributes } from 'react';
import { tabs } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  disabled?: boolean;
  label?: string;
  previousLabel?: string;
  nextLabel?: string;
}

/** Original Pagination (module 53765): preserve its items, geometry and states. */
export function Pagination({
  page, totalPages, onChange, disabled = false,
  label = 'Paginação', previousLabel = 'Página anterior', nextLabel = 'Próxima página',
}: PaginationProps) {
  const scope = useUiClass('g-ref rare-pagination');
  const total = Math.max(1, Math.trunc(totalPages));
  const current = Math.max(1, Math.min(total, Math.trunc(page)));
  const original = tabs.Pagination({
    page: current, total,
    onChange: (next: number) => {
      if (!disabled && next !== current && next >= 1 && next <= total) onChange(next);
    },
  });
  return cloneElement(original, { className: scope, 'aria-label': label, 'aria-busy': disabled || undefined },
    Children.map(original.props.children, child => {
      if (!isValidElement<ButtonHTMLAttributes<HTMLButtonElement>>(child) || child.type !== 'button') return child;
      const originalLabel = child.props['aria-label'];
      return cloneElement(child, {
        disabled: disabled || child.props.disabled,
        'aria-label': originalLabel === 'Página anterior' ? previousLabel
          : originalLabel === 'Próxima página' ? nextLabel : originalLabel,
      });
    }),
  );
}
