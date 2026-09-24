import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Icon } from './icons';
import { MultiSelect } from './CatalogReference';
import { useUiClass } from './theme';

export type Choice = { value: string; label: string; description?: string; disabled?: boolean; icon?: ReactNode };

export function CheckboxGroup({ label, options, value, onChange, disabled = false, name }: {
  label: string; options: Choice[]; value: string[]; onChange: (value: string[]) => void; disabled?: boolean; name?: string;
}) {
  return <fieldset className={useUiClass('g-catalog-choice')} disabled={disabled}>
    <legend>{label}</legend>{options.map(option => <label key={option.value} className="g-catalog-choice-item">
      <input type="checkbox" name={name} value={option.value} checked={value.includes(option.value)} disabled={option.disabled}
        onChange={event => onChange(event.target.checked ? [...value, option.value] : value.filter(item => item !== option.value))} />
      <span>{option.icon}{option.label}{option.description && <small>{option.description}</small>}</span>
    </label>)}
  </fieldset>;
}

export function RadioGroup({ label, options, value, onChange, disabled = false, name }: {
  label: string; options: Choice[]; value: string; onChange: (value: string) => void; disabled?: boolean; name?: string;
}) {
  const generatedName = useId();
  return <fieldset className={useUiClass('g-catalog-choice')} disabled={disabled}>
    <legend>{label}</legend>{options.map(option => <label key={option.value} className="g-catalog-choice-item">
      <input type="radio" name={name ?? generatedName} value={option.value} checked={value === option.value} disabled={option.disabled}
        onChange={() => onChange(option.value)} />
      <span>{option.icon}{option.label}{option.description && <small>{option.description}</small>}</span>
    </label>)}
  </fieldset>;
}

export function QuantityPicker({ label, value, onChange, min = 0, max = Number.MAX_SAFE_INTEGER, step = 1, unit, disabled = false }: {
  label: string; value: number; onChange: (value: number) => void; min?: number; max?: number; step?: number; unit?: string; disabled?: boolean;
}) {
  const id = useId();
  const clamp = (next: number) => Number.isFinite(next) && onChange(Math.max(min, Math.min(max, next)));
  return <div className={useUiClass('g-catalog-field')}>
    <label htmlFor={id}>{label}</label>
    <div className="g-catalog-stepper">
      <button type="button" aria-label={`Diminuir ${label}`} disabled={disabled || value <= min} onClick={() => clamp(value - step)}><Icon name="Minus" size={16} /></button>
      <input id={id} type="number" inputMode="numeric" min={min} max={max} step={step} value={value} disabled={disabled} onChange={event => clamp(event.target.valueAsNumber)} />
      <button type="button" aria-label={`Aumentar ${label}`} disabled={disabled || value >= max} onClick={() => clamp(value + step)}><Icon name="Plus" size={16} /></button>
      {unit && <span className="g-catalog-unit">{unit}</span>}
    </div>
  </div>;
}

export function DurationPicker({ label = 'Duração', value, onChange, maxHours = 999, disabled = false }: {
  label?: string; value: number; onChange: (minutes: number) => void; maxHours?: number; disabled?: boolean;
}) {
  const hours = Math.floor(Math.max(0, value) / 60);
  const minutes = Math.max(0, value) % 60;
  const setHours = (next: number) => onChange(Math.max(0, Math.min(maxHours, next)) * 60 + minutes);
  const setMinutes = (next: number) => onChange(hours * 60 + Math.max(0, Math.min(59, next)));
  return <div className={useUiClass('g-catalog-duration')} role="group" aria-label={label}>
    <span className="g-catalog-label">{label}</span>
    <label><input type="number" min={0} max={maxHours} value={hours} disabled={disabled} aria-label={`${label}: horas`} onChange={event => Number.isFinite(event.target.valueAsNumber) && setHours(event.target.valueAsNumber)} /><span>Hr.</span></label>
    <span aria-hidden="true">:</span>
    <label><input type="number" min={0} max={59} value={minutes} disabled={disabled} aria-label={`${label}: minutos`} onChange={event => Number.isFinite(event.target.valueAsNumber) && setMinutes(event.target.valueAsNumber)} /><span>Min.</span></label>
  </div>;
}

export function IntervalPicker(props: Omit<Parameters<typeof DurationPicker>[0], 'label'> & { label?: string }) {
  return <DurationPicker label="Intervalo" {...props} />;
}

const weekdays = [{ value: 1, label: 'Segunda', short: 'S' }, { value: 2, label: 'Terça', short: 'T' }, { value: 3, label: 'Quarta', short: 'Q' }, { value: 4, label: 'Quinta', short: 'Q' }, { value: 5, label: 'Sexta', short: 'S' }, { value: 6, label: 'Sábado', short: 'S' }, { value: 0, label: 'Domingo', short: 'D' }];
export function WeekdayPicker({ value, onChange, label = 'Dias ativos', disabled = false, requireOne = true }: {
  value: number[]; onChange: (days: number[]) => void; label?: string; disabled?: boolean; requireOne?: boolean;
}) {
  return <fieldset className={useUiClass('g-catalog-weekdays')} disabled={disabled}>
    <legend>{label}</legend><div>{weekdays.map(day => <label key={day.value} title={day.label}>
      <input type="checkbox" value={day.value} checked={value.includes(day.value)} aria-label={day.label}
        onChange={event => { const next = event.target.checked ? [...value, day.value] : value.filter(item => item !== day.value); if (next.length || !requireOne) onChange(next); }} />
      <span>{day.short}</span>
    </label>)}</div>
  </fieldset>;
}

export function SchedulePicker({ value, onChange, label = 'Horários', max = 24, disabled = false }: {
  value: string[]; onChange: (times: string[]) => void; label?: string; max?: number; disabled?: boolean;
}) {
  const [draft, setDraft] = useState('09:00');
  const add = () => { if (/^\d{2}:\d{2}$/.test(draft) && !value.includes(draft) && value.length < max) onChange([...value, draft].sort()); };
  return <div className={useUiClass('g-catalog-field g-catalog-schedule')}>
    <span className="g-catalog-label">{label}</span>
    <ul>{value.map(time => <li key={time}><time>{time}</time><button type="button" disabled={disabled} aria-label={`Remover ${time}`} onClick={() => onChange(value.filter(item => item !== time))}><Icon name="X" size={14} /></button></li>)}</ul>
    <div className="g-catalog-schedule-add"><input type="time" value={draft} disabled={disabled} aria-label="Novo horário" onChange={event => setDraft(event.target.value)} /><button type="button" disabled={disabled || value.length >= max} onClick={add}>Adicionar</button></div>
  </div>;
}

export function AccountPicker({ label = 'Contas de destino', options, value, onChange, placeholder = 'Buscar contas' }: {
  label?: string; options: Choice[]; value: string[]; onChange: (value: string[]) => void; placeholder?: string;
}) {
  return <MultiSelect label={label} options={options} value={value} onChange={onChange} searchPlaceholder={placeholder} />;
}

/** Free text stays valid; suggestions only help fill it. */
export function Autocomplete({ label, value, onChange, options, placeholder = 'Digite para buscar…', disabled = false }: {
  label: string; value: string; onChange: (value: string) => void; options: Choice[]; placeholder?: string; disabled?: boolean;
}) {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const matches = options.filter(option => `${option.label} ${option.value}`.toLocaleLowerCase().includes(value.toLocaleLowerCase())).slice(0, 12);
  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);
  const choose = (option: Choice) => { onChange(option.value); setOpen(false); };
  return <div ref={root} className={useUiClass('g-catalog-autocomplete g-catalog-field')}>
    <label htmlFor={id}>{label}</label>
    <input id={id} role="combobox" aria-autocomplete="list" aria-expanded={open && matches.length > 0} aria-controls={`${id}-options`} aria-activedescendant={open && matches[active] ? `${id}-option-${active}` : undefined}
      value={value} onChange={event => { onChange(event.target.value); setActive(0); setOpen(true); }} onFocus={() => setOpen(true)} placeholder={placeholder} disabled={disabled}
      onKeyDown={event => {
        if (event.key === 'ArrowDown' && matches.length) { event.preventDefault(); setActive((active + 1) % matches.length); setOpen(true); }
        if (event.key === 'ArrowUp' && matches.length) { event.preventDefault(); setActive((active + matches.length - 1) % matches.length); setOpen(true); }
        if (event.key === 'Enter' && open && matches[active]) { event.preventDefault(); choose(matches[active]); }
        if (event.key === 'Escape') setOpen(false);
      }} />
    {open && matches.length > 0 && <div id={`${id}-options`} role="listbox" aria-label={`${label}: sugestões`} className="g-catalog-autocomplete-options">
      {matches.map((option, index) => <button key={option.value} id={`${id}-option-${index}`} type="button" role="option" aria-selected={index === active} disabled={option.disabled} onClick={() => choose(option)}>{option.icon}{option.label}</button>)}
    </div>}
  </div>;
}
