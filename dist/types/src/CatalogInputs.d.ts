import { type ReactNode } from 'react';
export type Choice = {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
    icon?: ReactNode;
};
export declare function CheckboxGroup({ label, options, value, onChange, disabled, name }: {
    label: string;
    options: Choice[];
    value: string[];
    onChange: (value: string[]) => void;
    disabled?: boolean;
    name?: string;
}): import("react").JSX.Element;
export declare function RadioGroup({ label, options, value, onChange, disabled, name }: {
    label: string;
    options: Choice[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    name?: string;
}): import("react").JSX.Element;
export declare function QuantityPicker({ label, value, onChange, min, max, step, unit, disabled }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    disabled?: boolean;
}): import("react").JSX.Element;
export declare function DurationPicker({ label, value, onChange, maxHours, disabled }: {
    label?: string;
    value: number;
    onChange: (minutes: number) => void;
    maxHours?: number;
    disabled?: boolean;
}): import("react").JSX.Element;
export declare function IntervalPicker(props: Omit<Parameters<typeof DurationPicker>[0], 'label'> & {
    label?: string;
}): import("react").JSX.Element;
export declare function WeekdayPicker({ value, onChange, label, disabled, requireOne }: {
    value: number[];
    onChange: (days: number[]) => void;
    label?: string;
    disabled?: boolean;
    requireOne?: boolean;
}): import("react").JSX.Element;
export declare function SchedulePicker({ value, onChange, label, max, disabled }: {
    value: string[];
    onChange: (times: string[]) => void;
    label?: string;
    max?: number;
    disabled?: boolean;
}): import("react").JSX.Element;
export declare function AccountPicker({ label, options, value, onChange, placeholder }: {
    label?: string;
    options: Choice[];
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
}): import("react").JSX.Element;
/** Free text stays valid; suggestions only help fill it. */
export declare function Autocomplete({ label, value, onChange, options, placeholder, disabled }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Choice[];
    placeholder?: string;
    disabled?: boolean;
}): import("react").JSX.Element;
