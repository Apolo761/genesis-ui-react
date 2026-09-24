import type { ReactNode } from 'react';
import { settings } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

export function Dialog({ open, onOpenChange, title, description, closeLabel, children, className = '' }: {
  open: boolean; onOpenChange: (open: boolean) => void; title: string;
  description?: string; closeLabel: string; children: ReactNode; className?: string;
}) {
  const { Dialog: Root, DialogContent: Content, DialogTitle: Title, DialogDescription: Description } = settings;
  return <Root open={open} onOpenChange={onOpenChange}>
    <Content className={useUiClass(`g-ref ${className}`)} closeLabel={closeLabel}>
      <header className="g-dialog-header"><Title>{title}</Title>{description && <Description>{description}</Description>}</header>
      {children}
    </Content>
  </Root>;
}
