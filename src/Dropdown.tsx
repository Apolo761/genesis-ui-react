import { cloneElement, useCallback, useRef, type MutableRefObject, type ReactElement, type ReactNode, type Ref } from 'react';
import { selection, combobox, baseCombobox, fields } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

export interface DropdownOption {value: string; label: string; description?: string; disabled?: boolean; icon?: ReactNode; group?: string}
export interface DropdownProps {
  label: string; value: string; onChange: (value:string) => void; options: DropdownOption[];
  disabled?: boolean; hideLabel?: boolean; triggerLabel?: string; triggerIcon?: ReactNode;
  triggerRef?: Ref<HTMLButtonElement>; busy?: boolean; menuWide?: boolean; className?: string;
  onOpenChange?: (open:boolean) => void; invalid?: boolean; labelClassName?: string;
}
/** Original Dropdown shared by settings, toolbar icons and application fields. */
export function Dropdown({hideLabel,triggerLabel,triggerIcon,triggerRef,busy,menuWide,className,onOpenChange,invalid,labelClassName,...props}: DropdownProps) {
  const scope=useUiClass(`g-ref g-dropdown ${className ?? ''}`);
  const buttonRef=useRef<HTMLButtonElement|null>(null);
  const setTrigger=useCallback((element:HTMLButtonElement|null)=>{
    buttonRef.current=element;
    if(typeof triggerRef==='function') triggerRef(element);
    else if(triggerRef) (triggerRef as MutableRefObject<HTMLButtonElement|null>).current=element;
  },[triggerRef]);
  const root=selection.Dropdown(props);
  const [field,content]=root.props.children as ReactElement[];
  const [label,anchor]=field.props.children as ReactElement[];
  const trigger=anchor.props.children as ReactElement;
  const button=cloneElement(trigger,{
    ref:setTrigger,'aria-label':triggerLabel ?? props.label,'aria-busy':busy || undefined,'aria-invalid':invalid || undefined,
    ...(triggerIcon ? {className:'icon-button icon-button--md icon-button--neutral',children:triggerIcon} : {}),
  });
  const List=combobox.ComboboxList, Item=combobox.ComboboxItem, Group=baseCombobox.Group, GroupLabel=baseCombobox.GroupLabel, NavigationInput=baseCombobox.Input;
  const groups=props.options.reduce<Array<{label:string;options:DropdownOption[]}>>((all,option)=>{
    const label=option.group ?? '';const last=all.at(-1);
    if(last?.label===label) last.options.push(option);else all.push({label,options:[option]});return all;
  },[]);
  const grouped=props.options.some(option=>option.group) ? <List>{groups.map((group,index)=><Group key={`${group.label}-${index}`} aria-label={group.label || undefined}>
    {group.label && <GroupLabel className={fields.fieldLabelClassName}>{group.label}</GroupLabel>}
    {group.options.map(option=><Item key={option.value} value={option} disabled={option.disabled} description={option.description} icon={option.icon}>{option.label}</Item>)}
  </Group>)}</List> : content.props.children;
  return <div className={scope}>{cloneElement(root,{disabled:props.disabled,onOpenChange},
    cloneElement(field,{},hideLabel || triggerIcon ? null : cloneElement(label,{className:[label.props.className,labelClassName].filter(Boolean).join(' ')}),cloneElement(anchor,{},button)),
    cloneElement(content,{align:triggerIcon ? 'end':'start',className:triggerIcon ? 'g-dropdown-icon-menu':menuWide ? 'g-dropdown-wide-menu':undefined,'aria-label':props.label,finalFocus:buttonRef},
      // The reference omits Combobox.Input in selection-only fields. Base UI's
      // trigger delegates arrow-key navigation to it, so retain its native
      // keyboard controller without adding a visible search field or filtering.
      <NavigationInput className="sr-only" aria-label={props.label} readOnly data-g-dropdown-navigation="" />,
      grouped),
  )}</div>;
}
