import { type ButtonHTMLAttributes, type InputHTMLAttributes, type TextareaHTMLAttributes, type HTMLAttributes, type DetailsHTMLAttributes, type ProgressHTMLAttributes, type TableHTMLAttributes, type ReactNode } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    loading?: boolean;
    loadingLabel?: string;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    /** Keep the original primary treatment while native disabled semantics remain active. */
    keepPrimaryAppearance?: boolean;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
/** Structural actions (cards, rows, backdrops): keep child layout and native
 * submit semantics. Use Button for standalone labelled action controls. */
export declare const Pressable: import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
export declare const IconButton: import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "sm" | "md" | "lg";
} & import("react").RefAttributes<HTMLButtonElement>>;
/** Native event, validity, FormData and ref contracts are intentionally intact. */
export declare const Input: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLInputElement>>;
type FieldProps = {
    label?: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    leading?: ReactNode;
    trailing?: ReactNode;
};
export declare const TextField: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & FieldProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const SearchField: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    label?: ReactNode;
    onClear: () => void;
    resultCount?: number;
    clearLabel?: string;
    containerClassName?: string;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare const TextArea: import("react").ForwardRefExoticComponent<TextareaHTMLAttributes<HTMLTextAreaElement> & import("react").RefAttributes<HTMLTextAreaElement>>;
export { NativeSelect } from './NativeSelect';
export declare const Checkbox: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & import("react").RefAttributes<HTMLInputElement>>;
export declare const Radio: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & import("react").RefAttributes<HTMLInputElement>>;
export declare const Slider: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & import("react").RefAttributes<HTMLInputElement>>;
export declare const Progress: import("react").ForwardRefExoticComponent<ProgressHTMLAttributes<HTMLProgressElement> & import("react").RefAttributes<HTMLProgressElement>>;
export declare const Disclosure: import("react").ForwardRefExoticComponent<DetailsHTMLAttributes<HTMLDetailsElement> & import("react").RefAttributes<HTMLDetailsElement>>;
export declare const Table: import("react").ForwardRefExoticComponent<TableHTMLAttributes<HTMLTableElement> & import("react").RefAttributes<HTMLTableElement>>;
export declare const Separator: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLHRElement> & import("react").RefAttributes<HTMLHRElement>>;
export declare const DialogSurface: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export declare const Switch: import("react").ForwardRefExoticComponent<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
    checked: boolean;
    onCheckedChange: (value: boolean) => void;
    busy?: boolean;
} & import("react").RefAttributes<HTMLButtonElement>>;
