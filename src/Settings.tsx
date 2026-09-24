import { cloneElement, type ReactElement, type ReactNode } from 'react';
import { settings } from '../vendor/loader.mjs';
import { useUiClass } from './theme';
export { Dropdown as SettingsDropdown } from './Dropdown';

export interface SettingsSection {
  id: string; label: string; title: string; description: string; icon?: ReactNode; content: ReactNode;
}
/** Original SettingsDialog, Hook Sidebar and Base UI focus/close lifecycle.
 * Only scope and translated accessibility labels are adapted for the host. */
export function SettingsDialog({closeLabel, sectionLabel, footer, className, ...props}: {
  footer?: ReactNode; className?: string;
  open: boolean; onOpenChange: (open: boolean) => void; title: string; groupLabel: string;
  sections: [SettingsSection, ...SettingsSection[]]; defaultSection?: number; closeLabel: string; sectionLabel: string;
}) {
  const scope = useUiClass('g-ref');
  const root = settings.SettingsDialog(props);
  const content = root.props.children as ReactElement;
  const translate = (node: ReactNode): ReactNode => {
    if (!node || typeof node !== 'object' || !('props' in node)) return node;
    const element = node as ReactElement;
    const attributes = element.type === 'select' ? {'aria-label':sectionLabel} : {};
    return cloneElement(element, attributes, ...([element.props.children].flat().map(translate)));
  };
  const panels = [content.props.children].flat().map(translate);
  if (footer && panels[1] && typeof panels[1] === 'object' && 'props' in panels[1]) {
    const main = panels[1] as ReactElement;
    panels[1] = cloneElement(main, {}, main.props.children, <div className="g-settings-footer">{footer}</div>);
  }
  return cloneElement(root, {}, cloneElement(content, {className:`${content.props.className} ${scope} ${className ?? ''}`, closeLabel}, ...panels));
}
export function SettingsRow(props: {label: string; description?: string; children?: ReactNode; className?: string}) {
  const Component = settings.SettingsRow;
  return <Component {...props} />;
}
export function SettingsSectionIcon({kind}: {kind: 'appearance'|'security'}) {
  const Component = kind === 'appearance' ? settings.SettingsAppearanceGlyph : settings.SettingsSecurityGlyph;
  return <Component size={15} />;
}
