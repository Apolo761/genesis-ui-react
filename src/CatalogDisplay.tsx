import { useState, type HTMLAttributes, type ReactNode } from 'react';
import { Button, IconButton } from './controls';
import { Icon } from './icons';
import { MediaPreview } from './MediaPreview';
import { ProgressBar } from './ProgressBar';
import { SocialAgentAvatar } from './CatalogReference';
import { useUiClass } from './theme';

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) { return <section {...props} className={useUiClass(`g-catalog-card ${className ?? ''}`)} />; }
export function Panel({ title, actions, className, children, ...props }: HTMLAttributes<HTMLElement> & { title?: ReactNode; actions?: ReactNode }) {
  return <section {...props} className={useUiClass(`g-catalog-panel ${className ?? ''}`)}>{(title || actions) && <header><h2>{title}</h2>{actions}</header>}{children}</section>;
}
export function Divider({ label, className }: { label?: string; className?: string }) { return <div className={useUiClass(`g-catalog-divider ${className ?? ''}`)} role="separator">{label && <span>{label}</span>}</div>; }
export function Toolbar({ label, children, className }: { label: string; children: ReactNode; className?: string }) { return <div className={useUiClass(`g-catalog-toolbar ${className ?? ''}`)} role="toolbar" aria-label={label}>{children}</div>; }

export function IconBar({ label, actions }: { label: string; actions: { id: string; label: string; icon: ReactNode; onClick: () => void; disabled?: boolean; selected?: boolean }[] }) {
  return <Toolbar label={label}>{actions.map(action => <IconButton key={action.id} aria-label={action.label} title={action.label} aria-pressed={action.selected} disabled={action.disabled} onClick={action.onClick}>{action.icon}</IconButton>)}</Toolbar>;
}

export type DataListItem = { id: string; title: ReactNode; description?: ReactNode; meta?: ReactNode; leading?: ReactNode; trailing?: ReactNode; onClick?: () => void };
export function DataList({ items, label = 'Lista de dados' }: { items: DataListItem[]; label?: string }) {
  return <ul className={useUiClass('g-catalog-data-list')} aria-label={label}>{items.map(item => <li key={item.id}>{item.onClick ? <button type="button" onClick={item.onClick}>{item.leading}<span><strong>{item.title}</strong>{item.description && <small>{item.description}</small>}</span>{item.meta}{item.trailing}</button> : <div>{item.leading}<span><strong>{item.title}</strong>{item.description && <small>{item.description}</small>}</span>{item.meta}{item.trailing}</div>}</li>)}</ul>;
}
export function KeyValue({ label, value }: { label: ReactNode; value: ReactNode }) { return <dl className={useUiClass('g-catalog-key-value')}><dt>{label}</dt><dd>{value}</dd></dl>; }

export type TimelineEvent = { id: string; title: ReactNode; description?: ReactNode; time?: ReactNode; tone?: 'neutral' | 'success' | 'warning' | 'danger' };
export function ActivityTimeline({ events, label = 'Atividade' }: { events: TimelineEvent[]; label?: string }) {
  return <ol className={useUiClass('g-catalog-timeline')} aria-label={label}>{events.map(event => <li key={event.id} data-tone={event.tone ?? 'neutral'}><div><strong>{event.title}</strong>{event.time && <time>{event.time}</time>}</div>{event.description && <p>{event.description}</p>}</li>)}</ol>;
}

export type CarouselSlide = { src: string; alt: string; kind?: 'image' | 'video'; poster?: string; caption?: string };
export function CarouselPreview({ slides, initialIndex = 0, label = 'Prévia de mídia' }: { slides: CarouselSlide[]; initialIndex?: number; label?: string }) {
  const [index, setIndex] = useState(Math.max(0, Math.min(slides.length - 1, initialIndex)));
  const slide = slides[index];
  if (!slide) return null;
  return <div className={useUiClass('g-catalog-carousel')} aria-label={label}>
    <MediaPreview src={slide.src} alt={slide.alt} kind={slide.kind} poster={slide.poster} caption={slide.caption} />
    {slides.length > 1 && <div className="g-catalog-carousel-controls"><IconButton aria-label="Anterior" disabled={index === 0} onClick={() => setIndex(index - 1)}><Icon name="ChevronLeft" size={18} /></IconButton><span>{index + 1} / {slides.length}</span><IconButton aria-label="Próximo" disabled={index === slides.length - 1} onClick={() => setIndex(index + 1)}><Icon name="ChevronRight" size={18} /></IconButton></div>}
  </div>;
}

export function GenerationStatus({ label, state, detail, progress }: { label: string; state: 'queued' | 'running' | 'done' | 'error'; detail?: string; progress?: number }) {
  return <div className={useUiClass('g-catalog-generation-status')} data-state={state} role="status" aria-live="polite"><span className="g-catalog-status-dot" aria-hidden="true" /><div><strong>{label}</strong>{detail && <p>{detail}</p>}{state === 'running' && progress !== undefined && <ProgressBar value={progress} max={100} ariaLabel={`${label}: ${progress}%`} />}</div></div>;
}

export function PromptInput({ value, onChange, onSubmit, placeholder = 'Descreva o que deseja criar…', disabled = false, submitLabel = 'Enviar', rows = 3 }: {
  value: string; onChange: (value: string) => void; onSubmit: (value: string) => void; placeholder?: string; disabled?: boolean; submitLabel?: string; rows?: number;
}) {
  return <form className={useUiClass('g-catalog-prompt')} onSubmit={event => { event.preventDefault(); if (value.trim()) onSubmit(value.trim()); }}>
    <textarea value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder} aria-label={placeholder} disabled={disabled} rows={rows} onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); if (value.trim()) onSubmit(value.trim()); } }} />
    <Button type="submit" variant="primary" disabled={disabled || !value.trim()}>{submitLabel}</Button>
  </form>;
}

export type AgentPresenceItem = { id: string; name: string; network: 'tiktok' | 'instagram'; state: 'idle' | 'listening' | 'analyzing' | 'planning' | 'creating' | 'ready' | 'attention' | 'error' };
export function AgentPresence({ agents, label = 'Agentes' }: { agents: AgentPresenceItem[]; label?: string }) {
  return <ul className={useUiClass('g-catalog-agent-presence')} aria-label={label}>{agents.map(agent => <li key={agent.id}><SocialAgentAvatar network={agent.network} state={agent.state} size={36} animated={false} decorative /><span><strong>{agent.name}</strong><small>{agent.state}</small></span><span className="g-catalog-status-dot" data-state={agent.state} aria-hidden="true" /></li>)}</ul>;
}
export const SocialAgents = AgentPresence;

export type GenerationQueueItem = { id: string; label: string; status: 'queued' | 'running' | 'done' | 'error'; progress?: number; detail?: string };
export function GenerationQueue({ items, onCancel, label = 'Fila de geração' }: { items: GenerationQueueItem[]; onCancel?: (id: string) => void; label?: string }) {
  return <ol className={useUiClass('g-catalog-generation-queue')} aria-label={label}>{items.map(item => <li key={item.id}><GenerationStatus label={item.label} state={item.status} detail={item.detail} progress={item.progress} />{onCancel && (item.status === 'queued' || item.status === 'running') && <IconButton aria-label={`Cancelar ${item.label}`} onClick={() => onCancel(item.id)}><Icon name="X" size={16} /></IconButton>}</li>)}</ol>;
}
