import { Children, forwardRef, isValidElement, useLayoutEffect, useRef, useState, type ReactNode, type SelectHTMLAttributes } from 'react';
import { Dropdown, type DropdownOption } from './Dropdown';

function textOf(node: ReactNode): string {
  return Children.toArray(node).map(child=>isValidElement(child) ? textOf(child.props.children) : String(child)).join('');
}
function optionsOf(children: ReactNode, group?: string, disabled=false): DropdownOption[] {
  return Children.toArray(children).flatMap(child=>{
    if(!isValidElement(child)) return [];
    if(child.type==='option') return [{value:String(child.props.value ?? textOf(child.props.children)),label:textOf(child.props.children),disabled:disabled || child.props.disabled,group}];
    return optionsOf(child.props.children,child.type==='optgroup' ? child.props.label:group,disabled || child.props.disabled);
  });
}
/** Visible UI is the original Dropdown. A non-interactive native form control
 * retains FormData, validation, reset, DOM refs and actual change-event targets.
 * No legacy native select or alternate menu is visible to the user. */
export const NativeSelect = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(function NativeSelect({className,children,onChange,onInvalid,...props},forwardedRef) {
  const native=useRef<HTMLSelectElement|null>(null),trigger=useRef<HTMLButtonElement>(null);
  const options=optionsOf(children);
  const [uncontrolled,setUncontrolled]=useState(String(props.defaultValue ?? options[0]?.value ?? ''));
  const [label,setLabel]=useState(props['aria-label'] ?? props.name ?? '');
  const [invalid,setInvalid]=useState(false);
  useLayoutEffect(()=>{
    const select=native.current;if(!select) return;
    if(!props['aria-label']) {
      const text=Array.from(select.labels ?? []).map(label=>{const copy=label.cloneNode(true) as HTMLElement;copy.querySelectorAll('[data-g-select-root]').forEach(node=>node.remove());return copy.textContent?.trim() ?? '';}).join(' ');
      setLabel(text || props.name || '');
    }
    if(props.value===undefined) setUncontrolled(select.value);
  },[children,props['aria-label'],props.name,props.value]);
  useLayoutEffect(()=>{
    const form=native.current?.form;if(!form) return;
    const reset=()=>queueMicrotask(()=>{if(native.current){setUncontrolled(native.current.value);setInvalid(false);}});
    form.addEventListener('reset',reset);return()=>form.removeEventListener('reset',reset);
  },[]);
  return <span className="g-select-field" data-g-select-root="">
    <select {...props} ref={element=>{native.current=element;if(typeof forwardedRef==='function') forwardedRef(element);else if(forwardedRef) forwardedRef.current=element;}}
      aria-hidden="true" tabIndex={-1} className="g-native-select-contract"
      onChange={event=>{setUncontrolled(event.currentTarget.value);setInvalid(false);onChange?.(event);}}
      onInvalid={event=>{onInvalid?.(event);if(!event.defaultPrevented){event.preventDefault();setInvalid(true);trigger.current?.focus();}}}>
      {children}
    </select>
    <Dropdown label={props['aria-label'] ?? label} hideLabel triggerRef={trigger} disabled={props.disabled} invalid={invalid || !!props['aria-invalid']}
      value={props.value===undefined ? uncontrolled : String(props.value)} options={options}
      onChange={value=>{if(native.current){native.current.value=value;native.current.dispatchEvent(new Event('change',{bubbles:true}));}}} />
  </span>;
});
