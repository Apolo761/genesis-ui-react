import { Dropdown } from './Dropdown';
export interface SelectOption {
  value: string;
  label: string;
  /** Secondary line in the menu, e.g. "light · Playwright + DOM". */
  meta?: string;
  /** Shown below the field when this option is selected (normal case). */
  summary?: string;
  /** Optional section header in grouped menus. */
  group?: string;
}

export interface SelectProps {
  selectedLabel?: (label: string, value: string) => string;
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  /** Fallback hint when the selected option has no summary. */
  hint?: string;
  /** Render the label to the left of the field instead of above (denser). */
  inlineLabel?: boolean;
  /** Extra classes for the label (e.g. fixed width so stacked inline selects align). */
  labelClassName?: string;
  /** Compatibility flag: original Dropdown options always allow wrapping. */
  wrapOptions?: boolean;
  /** Make the open menu wider than the trigger for long option text. */
  wideMenu?: boolean;
  /**
   * When false, option ``meta`` only appears in the open menu — not on the
   * closed trigger (useful for Dataset counts that clutter the compact field).
   */
  showSelectedMeta?: boolean;
}


export function Select({label,selectedLabel=(label,value)=>`${label}: ${value}`,value,options,onChange,disabled,hint,inlineLabel=false,labelClassName,wideMenu=false,showSelectedMeta=true}: SelectProps) {
  const selected=options.find(option=>option.value===value);
  const footer=selected?.summary ?? hint;
  return <div className={inlineLabel ? 'g-select-inline':'g-select-field'}>
    <Dropdown label={label} labelClassName={labelClassName} triggerLabel={selectedLabel(label,selected?.label ?? value)}
      value={value} options={options.map(option=>({...option,description:option.meta}))}
      onChange={onChange} disabled={disabled} menuWide={wideMenu} />
    {showSelectedMeta && selected?.meta && <p className="g-select-hint">{selected.meta}</p>}
    {footer && <p className="g-select-hint">{footer}</p>}
  </div>;
}
