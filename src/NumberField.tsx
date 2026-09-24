import { useId, useState } from "react";
import { Input, IconButton } from "./controls";
import { Icon } from "./icons";
import { useUiClass } from "./theme";

/** The journey's +/- control, with direct entry and no native browser spinners. */
export function NumberField({ label, decreaseLabel, increaseLabel, value, onChange, min = 1, max, disabled = false, hint }: {
  label: string;
  decreaseLabel: string;
  increaseLabel: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max: number;
  disabled?: boolean;
  hint?: string;
}) {
  const className = useUiClass("g-number");
  const id = useId();
  const [editing, setEditing] = useState<string | null>(null);
  function commit(raw: string) {
    const parsed = raw.trim() ? Number(raw) : value;
    onChange(Math.min(max, Math.max(min, Number.isFinite(parsed) ? Math.round(parsed) : value)));
    setEditing(null);
  }
  return <div className={className}>
    <label htmlFor={id}>{label}</label>
    <div className="g-number-control" role="group" aria-label={label}>
      <IconButton type="button" aria-label={decreaseLabel} disabled={disabled || value <= min} onClick={() => { setEditing(null); onChange(Math.max(min, value - 1)); }}><Icon name="Minus" size={14} /></IconButton>
      <Input id={id} type="number" inputMode="numeric" step={1} min={min} max={max} value={editing ?? value} disabled={disabled}
        aria-describedby={hint ? `${id}-hint` : undefined}
        onChange={event => {
          const raw = event.target.value;
          setEditing(raw);
          const parsed = Number(raw);
          if (raw.trim() && Number.isInteger(parsed) && parsed >= min && parsed <= max) onChange(parsed);
        }} onBlur={event => commit(event.target.value)} onKeyDown={event => { if (event.key === "Enter") commit(event.currentTarget.value); }} />
      <IconButton type="button" aria-label={increaseLabel} disabled={disabled || value >= max} onClick={() => { setEditing(null); onChange(Math.min(max, value + 1)); }}><Icon name="Plus" size={14} /></IconButton>
    </div>
    {hint && <small id={`${id}-hint`}>{hint}</small>}
  </div>;
}
