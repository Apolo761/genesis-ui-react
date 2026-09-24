import { Children, cloneElement, isValidElement, useEffect, useRef, type ReactElement } from 'react';
import { chatComposer } from '../vendor/loader.mjs';
import { useUiClass } from './theme';
import { IconButton } from './controls';
import { Icon } from './icons';
import { VoiceWaveform } from './VoiceWaveform';
const useReferenceComposer = chatComposer.ChatComposer as (props: Record<string, unknown>) => ReactElement;

/** Original composition, menu icons and send motion, connected to application features. */
export function ChatComposer({ onSend, onDraftChange, onAttach, onMic, micState = 'idle', micLabel, messageLabel, attachLabel, sendLabel, voiceControls, insertion, placeholder, attachDisabled = false, disabled = false }: {
  onSend: (message: string) => void; onAttach: () => void; onMic: () => void;
  onDraftChange?: (message: string) => void;
  micState?: 'idle' | 'recording' | 'busy'; micLabel?: string; messageLabel?: string; attachLabel?: string; sendLabel?: string;
  voiceControls?: { cancel: () => void; stop: () => void; send: () => void; levels: number[]; seconds: number; cancelLabel: string; stopLabel: string; sendLabel: string; processingLabel: string };
  insertion?: { id: number; text: string; submit?: boolean; replace?: boolean }; placeholder: string; attachDisabled?: boolean; disabled?: boolean;
}) {
  const scope = useUiClass('g-ref genesis-chat-composer');
  const field = useRef<{ value: string; onValueChange: (value: string) => void }>();
  const root = useRef<HTMLFieldSetElement>(null);
  const consumed = useRef<number>();
  const original = useReferenceComposer({ onSend: (text: string) => { if (micState === 'idle' && !disabled) { onDraftChange?.(''); onSend(text); } }, onPlusClick: onAttach, onMicClick: onMic, placeholder, showMessages: false });
  function adapt(node: unknown): unknown {
    if (!isValidElement<Record<string, unknown>>(node)) return node;
    const label = node.props['aria-label'];
    let props: Record<string, unknown> = {};
    if (label === 'Mensagem') {
      field.current = node.props as unknown as NonNullable<typeof field.current>;
      const change = field.current.onValueChange;
      props = { 'aria-label': messageLabel || label, maxLength: 12000, disabled: disabled || micState !== 'idle', onValueChange: (value: string) => { change(value); onDraftChange?.(value); } };
    }
    if (label === 'Enviar' || label === 'Adicionar anexo') props.disabled = Boolean(node.props.disabled) || micState !== 'idle';
    if (label === 'Enviar') props['aria-label'] = sendLabel || label;
    if (label === 'Adicionar anexo') props['aria-label'] = attachLabel || label;
    if (label === 'Adicionar anexo' && attachDisabled) props.disabled = true;
    if (label === 'Falar em vez de digitar') props = {
      'aria-label': micLabel || label, 'aria-pressed': micState === 'recording', disabled: micState === 'busy',
      className: String(node.props.className).replace('@[21rem]:flex hidden', 'flex'),
      'data-recording': micState === 'recording' || undefined,
    };
    const children = Children.map(node.props.children as ReactElement, child => adapt(child) as ReactElement);
    // Replace only the source toolbar: keep the textarea, its draft and card geometry.
    if (voiceControls && micState !== 'idle' && String(node.props.className).startsWith('flex items-center gap-1.5 px-2.5 pt-1 pb-2.5')) {
      return <div className="genesis-voice-recorder" role="group" aria-label={micLabel}>
        <IconButton className="genesis-voice-control" onClick={voiceControls.cancel} aria-label={voiceControls.cancelLabel} title={voiceControls.cancelLabel}><Icon name="X" size={18} /></IconButton>
        {micState === 'busy' ? <span className="genesis-voice-processing" role="status">{voiceControls.processingLabel}</span> : <VoiceWaveform levels={voiceControls.levels} />}
        <IconButton className="genesis-voice-control" disabled={micState !== 'recording'} onClick={voiceControls.stop} aria-label={voiceControls.stopLabel} title={voiceControls.stopLabel}><span className="genesis-voice-stop" aria-hidden="true" /></IconButton>
        <IconButton className="genesis-voice-control genesis-voice-send" disabled={micState !== 'recording'} onClick={voiceControls.send} aria-label={voiceControls.sendLabel} title={voiceControls.sendLabel}><Icon name="ArrowUp" size={22} /></IconButton>
      </div>;
    }
    return cloneElement(node, props, children);
  }
  const adapted = adapt(original) as ReactElement;
  useEffect(() => {
    if (!insertion || insertion.id === consumed.current || !field.current) return;
    consumed.current = insertion.id;
    const text = insertion.replace ? insertion.text : [field.current.value.trim(), insertion.text.trim()].filter(Boolean).join('\n');
    if (insertion.submit && !disabled && micState === 'idle') { onDraftChange?.(''); onSend(text); field.current.onValueChange(''); }
    else { field.current.onValueChange(text); onDraftChange?.(text); }
    root.current?.querySelector('textarea')?.focus();
  }, [insertion]);
  return <fieldset ref={root} disabled={disabled} className={scope} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }} onKeyDownCapture={event => {
    if (event.key === 'Enter' && (event.nativeEvent.isComposing || event.keyCode === 229 || micState !== 'idle')) event.stopPropagation();
  }}>{adapted}</fieldset>;
}
