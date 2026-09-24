import { useId, useSyncExternalStore, type ComponentType } from 'react';
import { socialAgent } from '../vendor/loader.mjs';
import './mascot.css';

export type MascotState = 'idle' | 'listening' | 'analyzing' | 'planning' | 'creating' | 'ready' | 'attention' | 'error';
export type MascotCharacter = 'nico' | 'lumi';
export type MascotVariant = 'studio' | 'pop' | 'soft';
type AvatarProps = { network: 'tiktok' | 'instagram'; variant: MascotVariant; state: MascotState; size: number; animated: boolean; followPointer: boolean; decorative: boolean };
const Avatar = socialAgent.SocialAgentAvatar as ComponentType<AvatarProps>;
const listeners = new Set<() => void>();
let paused = false;
try { paused = localStorage.getItem('genesis.mascot.paused.v1') === 'true'; } catch { /* Storage is optional. */ }
const subscribe = (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; };
const snapshot = () => paused;
const serverSnapshot = () => false;
function toggleMotion() {
  paused = !paused;
  try { localStorage.setItem('genesis.mascot.paused.v1', String(paused)); } catch { /* Keep the session preference. */ }
  listeners.forEach(listener => listener());
}
/** Accessible appearance choices using the same original avatar engine. */
export function MascotVariantPicker({ value, onChange, label, description, options, disabled = false }: {
  value: MascotVariant; onChange: (variant: MascotVariant) => void; label: string; description: string;
  options: { value: MascotVariant; label: string }[]; disabled?: boolean;
}) {
  const id = useId();
  return <fieldset className="genesis-mascot-picker" disabled={disabled} aria-describedby={`${id}-description`}>
    <legend>{label}</legend>
    <p id={`${id}-description`}>{description}</p>
    <div className="genesis-mascot-options">
      {options.map((option, index) => <label key={option.value} className="genesis-mascot-option">
        <input type="radio" name={id} value={option.value} checked={value === option.value} onChange={() => onChange(option.value)} />
        <span className="genesis-mascot-option-card">
          <span className="genesis-mascot-option-preview" aria-hidden="true">
            {(['nico', 'lumi'] as const).map(character => <span key={character} className="genesis-mascot" data-character={character} data-variant={option.value}>
              <Avatar network={character === 'nico' ? 'tiktok' : 'instagram'} variant={option.value} state="idle" size={48} animated={false} followPointer={false} decorative />
            </span>)}
          </span>
          <span className="genesis-mascot-option-copy"><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><strong>{option.label}</strong></span>
          <svg className="genesis-mascot-option-check" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 4 4L19 6" /></svg>
        </span>
      </label>)}
    </div>
  </fieldset>;
}
/** Original library engine: morphs, blink, cursor gaze and visibility-aware animation. */
export function Mascot({ character = 'nico', variant = 'studio', state = 'idle', size = 80, pauseLabel, resumeLabel, className = '' }: {
  character?: MascotCharacter; variant?: MascotVariant; state?: MascotState; size?: number;
  pauseLabel: string; resumeLabel: string; className?: string;
}) {
  const isPaused = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  return <button type="button" className={`genesis-mascot ${className}`} data-character={character} data-state={state} data-variant={variant}
    aria-label={isPaused ? resumeLabel : pauseLabel} title={isPaused ? resumeLabel : pauseLabel} aria-pressed={isPaused} onClick={toggleMotion}>
    <Avatar key={`${character}:${variant}`} network={character === 'nico' ? 'tiktok' : 'instagram'} variant={variant} state={state} size={size} animated={!isPaused} followPointer decorative />
  </button>;
}
