import { type ReactElement, type ReactNode } from 'react';
export { Dropdown as SettingsDropdown } from './Dropdown';
export interface SettingsSection {
    id: string;
    label: string;
    title: string;
    description: string;
    icon?: ReactNode;
    content: ReactNode;
}
/** Original SettingsDialog, Hook Sidebar and Base UI focus/close lifecycle.
 * Only scope and translated accessibility labels are adapted for the host. */
export declare function SettingsDialog({ closeLabel, sectionLabel, footer, className, ...props }: {
    footer?: ReactNode;
    className?: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    groupLabel: string;
    sections: [SettingsSection, ...SettingsSection[]];
    defaultSection?: number;
    closeLabel: string;
    sectionLabel: string;
}): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare function SettingsRow(props: {
    label: string;
    description?: string;
    children?: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export declare function SettingsSectionIcon({ kind }: {
    kind: 'appearance' | 'security';
}): import("react").JSX.Element;
