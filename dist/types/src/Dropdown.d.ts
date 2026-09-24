import { type ReactNode, type Ref } from 'react';
export interface DropdownOption {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
    icon?: ReactNode;
    group?: string;
}
export interface DropdownProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: DropdownOption[];
    disabled?: boolean;
    hideLabel?: boolean;
    triggerLabel?: string;
    triggerIcon?: ReactNode;
    triggerRef?: Ref<HTMLButtonElement>;
    busy?: boolean;
    menuWide?: boolean;
    className?: string;
    onOpenChange?: (open: boolean) => void;
    invalid?: boolean;
    labelClassName?: string;
}
/** Original Dropdown shared by settings, toolbar icons and application fields. */
export declare function Dropdown({ hideLabel, triggerLabel, triggerIcon, triggerRef, busy, menuWide, className, onOpenChange, invalid, labelClassName, ...props }: DropdownProps): import("react").JSX.Element;
