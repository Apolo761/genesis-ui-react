import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Button, IconButton } from './controls';
import { Dialog } from './Dialog';
import { Icon } from './icons';
import { useUiClass } from './theme';

export function Popover({ trigger, children, open, onOpenChange, title, disabled = false }: {
  trigger: ReactNode; children: ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void; title?: string; disabled?: boolean;
}) {
  const [internal, setInternal] = useState(false);
  const expanded = open ?? internal;
  const root = useRef<HTMLDivElement>(null);
  const id = useId();
  const setOpen = (next: boolean) => { if (open === undefined) setInternal(next); onOpenChange?.(next); };
  useEffect(() => {
    if (!expanded) return;
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [expanded]);
  return <div ref={root} className={useUiClass('g-catalog-popover')}>
    <button type="button" aria-expanded={expanded} aria-controls={id} disabled={disabled} onClick={() => setOpen(!expanded)}>{trigger}</button>
    {expanded && <div id={id} className="g-catalog-popover-panel" role="group" aria-label={title}>{title && <strong>{title}</strong>}{children}</div>}
  </div>;
}

export function Tooltip({ label, children, side = 'top' }: { label: string; children: ReactNode; side?: 'top' | 'bottom' }) {
  const id = useId();
  return <span className={useUiClass('g-catalog-tooltip')} data-side={side} aria-describedby={id} tabIndex={0}>{children}<span id={id} role="tooltip">{label}</span></span>;
}

export function Drawer({ open, onOpenChange, title, description, children, side = 'right', closeLabel = 'Fechar' }: {
  open: boolean; onOpenChange: (open: boolean) => void; title: string; description?: string; children: ReactNode; side?: 'right' | 'left'; closeLabel?: string;
}) {
  const titleId = useId();
  const descriptionId = useId();
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    close.current?.focus();
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') onOpenChange(false); };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open, onOpenChange]);
  if (!open) return null;
  return <div className={useUiClass('g-catalog-drawer-root')}>
    <button type="button" className="g-catalog-drawer-backdrop" aria-label={closeLabel} onClick={() => onOpenChange(false)} />
    <aside className="g-catalog-drawer" data-side={side} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={description ? descriptionId : undefined}>
      <header><div><h2 id={titleId}>{title}</h2>{description && <p id={descriptionId}>{description}</p>}</div><IconButton ref={close} aria-label={closeLabel} onClick={() => onOpenChange(false)}><Icon name="X" size={18} /></IconButton></header>
      <div className="g-catalog-drawer-content">{children}</div>
    </aside>
  </div>;
}

export function AlertDialog({ open, onOpenChange, title, description, confirmLabel = 'Confirmar', cancelLabel = 'Cancelar', onConfirm, pending = false, tone = 'danger' }: {
  open: boolean; onOpenChange: (open: boolean) => void; title: string; description: string; confirmLabel?: string; cancelLabel?: string; onConfirm: () => void | Promise<void>; pending?: boolean; tone?: 'danger' | 'primary';
}) {
  return <Dialog open={open} onOpenChange={onOpenChange} title={title} description={description} closeLabel={cancelLabel}>
    <footer className="g-catalog-dialog-actions"><Button onClick={() => onOpenChange(false)} disabled={pending}>{cancelLabel}</Button><Button variant={tone} onClick={onConfirm} disabled={pending}>{confirmLabel}</Button></footer>
  </Dialog>;
}

export type MenuAction = { id: string; label: string; onSelect: () => void; disabled?: boolean; icon?: ReactNode; danger?: boolean };
export function ContextMenu({ children, actions, label = 'Ações' }: { children: ReactNode; actions: MenuAction[]; label?: string }) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!position) return;
    const close = (event: PointerEvent) => { if (!menu.current?.contains(event.target as Node)) setPosition(null); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setPosition(null); };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', escape); };
  }, [position]);
  return <div className={useUiClass('g-catalog-context')} onContextMenu={event => { event.preventDefault(); setPosition({ x: event.clientX, y: event.clientY }); }}>
    {children}
    {position && <div ref={menu} role="menu" aria-label={label} className="g-catalog-menu" style={{ left: position.x, top: position.y }}>
      {actions.map(action => <button key={action.id} type="button" role="menuitem" disabled={action.disabled} data-danger={action.danger || undefined} onClick={() => { action.onSelect(); setPosition(null); }}>{action.icon}{action.label}</button>)}
    </div>}
  </div>;
}

export function CommandMenu({ open, onOpenChange, commands, title = 'Comandos', placeholder = 'Buscar comando…' }: {
  open: boolean; onOpenChange: (open: boolean) => void; commands: (MenuAction & { keywords?: string[] })[]; title?: string; placeholder?: string;
}) {
  const [query, setQuery] = useState('');
  const filtered = commands.filter(command => `${command.label} ${command.keywords?.join(' ') ?? ''}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  return <Dialog open={open} onOpenChange={onOpenChange} title={title} closeLabel="Fechar">
    <div className="g-catalog-command"><label><Icon name="Search" size={18} /><input autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder={placeholder} aria-label={placeholder} onKeyDown={event => { if (event.key === 'Enter' && filtered[0] && !filtered[0].disabled) { filtered[0].onSelect(); onOpenChange(false); } }} /></label>
      <div role="listbox" aria-label={title}>{filtered.length ? filtered.map(command => <button key={command.id} role="option" aria-selected={false} type="button" disabled={command.disabled} onClick={() => { command.onSelect(); onOpenChange(false); }}>{command.icon}{command.label}</button>) : <p>Nenhum comando encontrado.</p>}</div>
    </div>
  </Dialog>;
}

export function Toast({ title, message, tone = 'info', onDismiss, duration = 0, action }: {
  title: string; message?: string; tone?: 'info' | 'success' | 'warning' | 'danger'; onDismiss?: () => void; duration?: number; action?: ReactNode;
}) {
  useEffect(() => { if (duration <= 0 || !onDismiss) return; const timer = window.setTimeout(onDismiss, duration); return () => window.clearTimeout(timer); }, [duration, onDismiss]);
  return <div className={useUiClass('g-catalog-toast')} data-tone={tone} role={tone === 'danger' || tone === 'warning' ? 'alert' : 'status'}>
    <div><strong>{title}</strong>{message && <p>{message}</p>}</div>{action}{onDismiss && <IconButton aria-label="Dispensar" onClick={onDismiss}><Icon name="X" size={16} /></IconButton>}
  </div>;
}
