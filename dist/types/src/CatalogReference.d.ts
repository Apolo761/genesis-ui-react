import type { ButtonHTMLAttributes, ComponentType, HTMLAttributes, ReactNode, RefObject } from 'react';
type NamedOption = {
    value: string;
    label: string;
    description?: string;
    icon?: ReactNode;
    disabled?: boolean;
};
type NamedValueProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: NamedOption[];
    placeholder?: string;
    searchPlaceholder?: string;
};
declare const ReferenceButtonGroup: ComponentType<HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical";
    size?: "sm" | "md" | "lg";
}>;
export declare function ButtonGroup({ className, ...props }: React.ComponentProps<typeof ReferenceButtonGroup>): import("react").JSX.Element;
export declare const ButtonGroupSeparator: ComponentType<HTMLAttributes<HTMLSpanElement>>;
export type SegmentedOption = {
    value: string;
    label: ReactNode;
    disabled?: boolean;
    icon?: ReactNode;
};
declare const ReferenceSegmented: ComponentType<{
    options: SegmentedOption[];
    value: string;
    onChange: (value: string) => void;
    ariaLabel: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}>;
export declare function SegmentedControl({ className, ...props }: React.ComponentProps<typeof ReferenceSegmented>): import("react").JSX.Element;
export type FluxButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
    idleLabel: string;
    loadingLabel: string;
    successLabel?: string;
    onAction: () => void | Promise<void>;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
    successHold?: number;
};
export declare function FluxButton({ className, ...props }: FluxButtonProps): import("react").JSX.Element;
export type DeleteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    onConfirm: () => void | Promise<void>;
    onCancel?: () => void;
};
export declare function DeleteButton({ className, ...props }: DeleteButtonProps): import("react").JSX.Element;
export declare function Combobox(props: NamedValueProps): import("react").JSX.Element;
type MultiValueProps = Omit<NamedValueProps, 'value' | 'onChange'> & {
    value: string[];
    onChange: (value: string[]) => void;
};
export declare function MultiSelect(props: MultiValueProps): import("react").JSX.Element;
type TagPickerProps = {
    label: string;
    value: string[];
    onChange: (value: string[]) => void;
    initialOptions: string[];
    placeholder?: string;
};
export declare function TagPicker(props: TagPickerProps): import("react").JSX.Element;
declare const ReferenceAccordion: ComponentType<HTMLAttributes<HTMLDivElement> & {
    value?: string | string[];
    defaultValue?: string | string[];
    onValueChange?: (value: string | string[]) => void;
    multiple?: boolean;
    collapsible?: boolean;
}>;
export declare function Accordion({ className, ...props }: React.ComponentProps<typeof ReferenceAccordion>): import("react").JSX.Element;
export declare const AccordionItem: ComponentType<HTMLAttributes<HTMLDivElement> & {
    value: string;
}>;
export declare const AccordionTrigger: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
export declare const AccordionContent: ComponentType<HTMLAttributes<HTMLDivElement>>;
type AvatarProps = HTMLAttributes<HTMLSpanElement> & {
    name?: string;
    size?: 'sm' | 'default' | 'lg' | number;
    tooltip?: string;
};
export declare function Avatar({ className, ...props }: AvatarProps): import("react").JSX.Element;
export declare const AvatarImage: ComponentType<{
    src: string;
    alt?: string;
}>;
export declare const AvatarFallback: ComponentType<{
    children: ReactNode;
}>;
export declare const AvatarGroup: ComponentType<HTMLAttributes<HTMLDivElement>>;
export declare const AvatarGroupCount: ComponentType<{
    count: number;
}>;
type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    description?: ReactNode;
    icon?: ReactNode;
    action?: ReactNode;
};
declare const ReferenceError: ComponentType<EmptyStateProps & {
    detail?: ReactNode;
    onRetry?: () => void;
    retrying?: boolean;
    retryLabel?: string;
}>;
export declare function EmptyState({ className, ...props }: EmptyStateProps): import("react").JSX.Element;
export declare function ErrorState({ className, ...props }: React.ComponentProps<typeof ReferenceError>): import("react").JSX.Element;
type CounterProps = HTMLAttributes<HTMLSpanElement> & {
    value: number;
    decimals?: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    separator?: string;
    decimalSeparator?: string;
};
export declare function AnimatedCounter({ className, ...props }: CounterProps): import("react").JSX.Element;
export type GooeyNavItem = {
    href: string;
    label: ReactNode;
    icon?: ReactNode;
};
type GooeyNavProps = HTMLAttributes<HTMLElement> & {
    items: GooeyNavItem[];
    value?: number;
    defaultValue?: number;
    onChange?: (index: number) => void;
    size?: 'sm' | 'md' | 'lg';
    activeColor?: string;
    activeLabelColor?: string;
};
export declare function GooeyNav({ className, ...props }: GooeyNavProps): import("react").JSX.Element;
type GridRevealProps = HTMLAttributes<HTMLDivElement> & {
    src: string;
    alt?: string;
    progress?: number;
    aspect?: number;
    caption?: string;
    estimatedDuration?: number;
    onRevealComplete?: () => void;
    onError?: () => void;
};
export declare function GridReveal({ className, ...props }: GridRevealProps): import("react").JSX.Element;
type AutomationProps<T> = {
    value: T;
    onChange: (value: T) => void;
};
export declare const DatePicker: (props: AutomationProps<string>) => import("react").JSX.Element;
export declare const DateRangePicker: (props: AutomationProps<{
    start: string;
    end: string;
}>) => import("react").JSX.Element;
export declare const TimezonePicker: (props: AutomationProps<string>) => import("react").JSX.Element;
export declare const ActiveWindowPicker: (props: AutomationProps<{
    start: string;
    end: string;
    overnight?: boolean;
}>) => import("react").JSX.Element;
export declare const RecurrencePicker: (props: AutomationProps<Record<string, unknown>>) => import("react").JSX.Element;
export declare const PublicationRules: (props: AutomationProps<Record<string, boolean>>) => import("react").JSX.Element;
type VideoControlsProps = HTMLAttributes<HTMLDivElement> & {
    videoRef: RefObject<HTMLVideoElement | null>;
    defaultVolume?: number;
    compact?: boolean;
};
export declare function VideoControls({ className, ...props }: VideoControlsProps): import("react").JSX.Element;
type SocialAgentAvatarProps = {
    network: 'tiktok' | 'instagram';
    variant?: 'studio' | 'pop' | 'soft';
    state?: 'idle' | 'listening' | 'analyzing' | 'planning' | 'creating' | 'ready' | 'attention' | 'error';
    size?: number;
    animated?: boolean;
    followPointer?: boolean;
    decorative?: boolean;
};
export declare function SocialAgentAvatar(props: SocialAgentAvatarProps): import("react").JSX.Element;
export {};
