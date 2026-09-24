import { Children, isValidElement, cloneElement, forwardRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type TextareaHTMLAttributes, type HTMLAttributes, type DetailsHTMLAttributes, type ProgressHTMLAttributes, type TableHTMLAttributes, type ReactNode } from 'react';
import { primitives, motion, useReducedMotion } from '../vendor/loader.mjs';
import foundations from './foundations.json';
import { useUiClass } from './theme';
import { Tab } from './Tabs';
import { Skeleton } from './Skeleton';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  loading?: boolean;
  loadingLabel?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  /** Keep the original primary treatment while native disabled semantics remain active. */
  keepPrimaryAppearance?: boolean;
}
function variantFromClass(className = ''): ButtonProps['variant'] {
  if (/danger|destructive|text-red|bg-red|text-error/.test(className)) return 'danger';
  if (/fluid-button-primary|bg-primary(?:\s|$)/.test(className)) return 'primary';
  if (/ghost|text-only|breadcrumb/.test(className)) return 'ghost';
  return 'secondary';
}

// The recovered render function already contains the original motion hooks.
// Calling it as this adapter's hook forwards a DOM ref under React 18 (the
// published React 19 component accepts ref through props). Hook order is fixed.
const useReferenceButton = primitives.RareButton;
function skeletonBusyIndicator(node: ReactNode): ReactNode {
  if (!isValidElement<{className?:string;children?:ReactNode}>(node)) return node;
  if (node.props.className === 'rare-spinner') return <Skeleton key={node.key} rounded="sm" style={{width:15,height:15}} />;
  return node.props.children ? cloneElement(node, {}, Children.map(node.props.children, skeletonBusyIndicator)) : node;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant, keepPrimaryAppearance = false, ...props }, ref) {
  const rootClass = useUiClass('g-ref');
  const reducedMotion = useReducedMotion();
  const resolvedVariant = variant ?? variantFromClass(className);
  const keepPrimary = keepPrimaryAppearance && resolvedVariant === 'primary';
  const result = useReferenceButton({ ...props, ref, variant: resolvedVariant, className: `${rootClass} g-button ${keepPrimary ? 'g-button-keep-primary' : ''} ${className ?? ''}` });
  const scoped = typeof result.type === 'string' ? result : cloneElement(result, { className: `${rootClass} ${result.props.className ?? ''}`, ...(keepPrimary ? { active: !reducedMotion } : {}) });
  return props.loading ? skeletonBusyIndicator(scoped) : scoped;
});

/** Structural actions (cards, rows, backdrops): keep child layout and native
 * submit semantics. Use Button for standalone labelled action controls. */
export const Pressable = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(function Pressable({ className, ...props }, ref) {
  const scope = useUiClass(`g-pressable ${className ?? ''}`);
  if (props.role === 'tab') return <Tab {...props} ref={ref} />;
  return <button {...props} ref={ref} className={scope} />;
});
export const IconButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { size?: 'sm' | 'md' | 'lg' }>(function IconButton({ className, size = 'md', type = 'button', ...props }, ref) {
  return <button {...props} ref={ref} type={type} className={useUiClass(`g-ref g-icon-button icon-button icon-button--${size} icon-button--neutral ${className ?? ''}`)} />;
});
/** Native event, validity, FormData and ref contracts are intentionally intact. */
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input({ className, type = 'text', ...props }, ref) {
  const scope = useUiClass(`g-input g-input--${type} ${className ?? ''}`);
  if (['file','hidden','checkbox','radio','range'].includes(type) || className?.includes('g-input-embedded')) return <input {...props} type={type} ref={ref} className={scope} />;
  return <TextField {...props} type={type} ref={ref} className={className} />;
});
type FieldProps = { label?: ReactNode; hint?: ReactNode; error?: ReactNode; leading?: ReactNode; trailing?: ReactNode };
const useTextField = primitives.TextField;
export const TextField = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & FieldProps>(function TextField(props, ref) {
  const scope = useUiClass('g-ref g-field');
  return cloneElement(useTextField({...props,ref}), {className:scope});
});
const useSearchField = primitives.SearchField;
export const SearchField = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & {label?: ReactNode; onClear: () => void; resultCount?: number; clearLabel?: string; containerClassName?: string}>(function SearchField({clearLabel, containerClassName = '', ...props}, ref) {
  const scope = useUiClass(`g-ref g-field ${containerClassName}`);
  const result = useSearchField({...props,ref});
  const [label, control, count] = result.props.children;
  const [icon, input, presence] = control.props.children;
  const animatedClear = presence.props.children;
  const clear = animatedClear ? cloneElement(animatedClear, {children:cloneElement(animatedClear.props.children, {'aria-label':clearLabel ?? 'Limpar busca', disabled:props.disabled})}) : null;
  return cloneElement(result, {className:`${scope} ${result.props.className}`}, label, cloneElement(control, {}, icon, input, cloneElement(presence,{children:clear})), count);
});
const useTextAreaField = primitives.TextAreaField;
export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function TextArea({ className, ...props }, ref) {
  const scope = useUiClass('g-ref g-field');
  return cloneElement(useTextAreaField({...props,ref,className,showCount:false}), {className:scope});
});
export { NativeSelect } from './NativeSelect';
export const Checkbox = forwardRef<HTMLInputElement, Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>(function Checkbox(props, ref) {
  return <Input {...props} ref={ref} type="checkbox" />;
});
export const Radio = forwardRef<HTMLInputElement, Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>(function Radio(props, ref) {
  return <Input {...props} ref={ref} type="radio" />;
});
export const Slider = forwardRef<HTMLInputElement, Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>(function Slider(props, ref) {
  return <Input {...props} ref={ref} type="range" />;
});
export const Progress = forwardRef<HTMLProgressElement, ProgressHTMLAttributes<HTMLProgressElement>>(function Progress({ className, ...props }, ref) {
  return <progress {...props} ref={ref} className={useUiClass(`g-progress ${className ?? ''}`)} />;
});
export const Disclosure = forwardRef<HTMLDetailsElement, DetailsHTMLAttributes<HTMLDetailsElement>>(function Disclosure({ className, ...props }, ref) {
  return <details {...props} ref={ref} className={useUiClass(`g-disclosure ${className ?? ''}`)} />;
});
export const Table = forwardRef<HTMLTableElement, TableHTMLAttributes<HTMLTableElement>>(function Table({ className, ...props }, ref) {
  return <table {...props} ref={ref} className={useUiClass(`g-table ${className ?? ''}`)} />;
});
export const Separator = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(function Separator({ className, ...props }, ref) {
  return <hr {...props} ref={ref} className={useUiClass(`g-separator ${className ?? ''}`)} />;
});
export const DialogSurface = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function DialogSurface({ className, role = 'dialog', ...props }, ref) {
  return <div {...props} ref={ref} role={role} className={useUiClass(`g-dialog ${className ?? ''}`)} />;
});
export const Switch = forwardRef<HTMLButtonElement, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & { checked: boolean; onCheckedChange: (value: boolean) => void; busy?: boolean }>(function Switch({ checked, onCheckedChange, busy, className, disabled, onClick, ...props }, ref) {
  const reducedMotion = useReducedMotion();
  return <button {...props} ref={ref} type="button" role="switch" aria-checked={checked} aria-busy={busy || undefined} disabled={disabled}
    className={useUiClass(`g-switch rare-switch ${checked || busy ? 'is-checked' : ''} ${className ?? ''}`)} onClick={event => { onClick?.(event); if (!event.defaultPrevented) onCheckedChange(!checked); }}><motion.span className="g-switch-thumb" animate={{ x: checked || busy ? foundations.geometry.switchTravel : 0 }} transition={reducedMotion ? { duration: 0 } : foundations.springs.switch} /></button>;
});
