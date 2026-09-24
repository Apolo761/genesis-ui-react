import type { ButtonHTMLAttributes, ComponentType, HTMLAttributes, ReactNode, RefObject } from 'react';
import { accordion, animatedCounter, automation, avatar, buttonGroup, deleteButton, emptyStates, fluxButton, gooeyNav, gridReveal, selection, socialAgent, videoControls } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

type NamedOption = { value: string; label: string; description?: string; icon?: ReactNode; disabled?: boolean };
type NamedValueProps = { label: string; value: string; onChange: (value: string) => void; options: NamedOption[]; placeholder?: string; searchPlaceholder?: string };

const ReferenceButtonGroup = buttonGroup.ButtonGroup as ComponentType<HTMLAttributes<HTMLDivElement> & { orientation?: 'horizontal' | 'vertical'; size?: 'sm' | 'md' | 'lg' }>;
export function ButtonGroup({ className, ...props }: React.ComponentProps<typeof ReferenceButtonGroup>) {
  return <ReferenceButtonGroup {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />;
}
export const ButtonGroupSeparator = buttonGroup.ButtonGroupSeparator as ComponentType<HTMLAttributes<HTMLSpanElement>>;

export type SegmentedOption = { value: string; label: ReactNode; disabled?: boolean; icon?: ReactNode };
const ReferenceSegmented = buttonGroup.SegmentedControl as ComponentType<{ options: SegmentedOption[]; value: string; onChange: (value: string) => void; ariaLabel: string; disabled?: boolean; size?: 'sm' | 'md' | 'lg'; className?: string }>;
export function SegmentedControl({ className, ...props }: React.ComponentProps<typeof ReferenceSegmented>) {
  return <ReferenceSegmented {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />;
}

export type FluxButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  idleLabel: string; loadingLabel: string; successLabel?: string; onAction: () => void | Promise<void>;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']; successHold?: number;
};
const ReferenceFluxButton = fluxButton.FluxButton as ComponentType<FluxButtonProps>;
export function FluxButton({ className, ...props }: FluxButtonProps) {
  return <ReferenceFluxButton {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />;
}

export type DeleteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { onConfirm: () => void | Promise<void>; onCancel?: () => void };
const ReferenceDeleteButton = deleteButton.DeleteButton as unknown as ComponentType<DeleteButtonProps>;
export function DeleteButton({ className, ...props }: DeleteButtonProps) {
  return <ReferenceDeleteButton {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />;
}

const ReferenceCombo = selection.Combobox as ComponentType<NamedValueProps>;
export function Combobox(props: NamedValueProps) { return <div className={useUiClass('g-ref')}><ReferenceCombo {...props} /></div>; }

type MultiValueProps = Omit<NamedValueProps, 'value' | 'onChange'> & { value: string[]; onChange: (value: string[]) => void };
const ReferenceMulti = selection.MultiSelect as ComponentType<MultiValueProps>;
export function MultiSelect(props: MultiValueProps) { return <div className={useUiClass('g-ref')}><ReferenceMulti {...props} /></div>; }

type TagPickerProps = { label: string; value: string[]; onChange: (value: string[]) => void; initialOptions: string[]; placeholder?: string };
const ReferenceTagPicker = selection.TagPicker as ComponentType<TagPickerProps>;
export function TagPicker(props: TagPickerProps) { return <div className={useUiClass('g-ref')}><ReferenceTagPicker {...props} /></div>; }

const ReferenceAccordion = accordion.Accordion as ComponentType<HTMLAttributes<HTMLDivElement> & { value?: string | string[]; defaultValue?: string | string[]; onValueChange?: (value: string | string[]) => void; multiple?: boolean; collapsible?: boolean }>;
export function Accordion({ className, ...props }: React.ComponentProps<typeof ReferenceAccordion>) { return <ReferenceAccordion {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />; }
export const AccordionItem = accordion.AccordionItem as unknown as ComponentType<HTMLAttributes<HTMLDivElement> & { value: string }>;
export const AccordionTrigger = accordion.AccordionTrigger as ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
export const AccordionContent = accordion.AccordionContent as ComponentType<HTMLAttributes<HTMLDivElement>>;

type AvatarProps = HTMLAttributes<HTMLSpanElement> & { name?: string; size?: 'sm' | 'default' | 'lg' | number; tooltip?: string };
const ReferenceAvatar = avatar.Avatar as ComponentType<AvatarProps>;
export function Avatar({ className, ...props }: AvatarProps) { return <ReferenceAvatar {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />; }
export const AvatarImage = avatar.AvatarImage as ComponentType<{ src: string; alt?: string }>;
export const AvatarFallback = avatar.AvatarFallback as ComponentType<{ children: ReactNode }>;
export const AvatarGroup = avatar.AvatarGroup as ComponentType<HTMLAttributes<HTMLDivElement>>;
export const AvatarGroupCount = avatar.AvatarGroupCount as ComponentType<{ count: number }>;

type EmptyStateProps = HTMLAttributes<HTMLDivElement> & { title: string; description?: ReactNode; icon?: ReactNode; action?: ReactNode };
const ReferenceEmpty = emptyStates.EmptyState as unknown as ComponentType<EmptyStateProps>;
const ReferenceError = emptyStates.ErrorState as unknown as ComponentType<EmptyStateProps & { detail?: ReactNode; onRetry?: () => void; retrying?: boolean; retryLabel?: string }>;
export function EmptyState({ className, ...props }: EmptyStateProps) { return <ReferenceEmpty {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />; }
export function ErrorState({ className, ...props }: React.ComponentProps<typeof ReferenceError>) { return <ReferenceError {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />; }

type CounterProps = HTMLAttributes<HTMLSpanElement> & { value: number; decimals?: number; duration?: number; prefix?: string; suffix?: string; separator?: string; decimalSeparator?: string };
const ReferenceCounter = animatedCounter.AnimatedCounter as unknown as ComponentType<CounterProps>;
export function AnimatedCounter({ className, ...props }: CounterProps) { return <ReferenceCounter {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />; }

export type GooeyNavItem = { href: string; label: ReactNode; icon?: ReactNode };
type GooeyNavProps = HTMLAttributes<HTMLElement> & { items: GooeyNavItem[]; value?: number; defaultValue?: number; onChange?: (index: number) => void; size?: 'sm' | 'md' | 'lg'; activeColor?: string; activeLabelColor?: string };
const ReferenceGooeyNav = gooeyNav.GooeyNav as unknown as ComponentType<GooeyNavProps>;
export function GooeyNav({ className, ...props }: GooeyNavProps) { return <ReferenceGooeyNav {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />; }

type GridRevealProps = HTMLAttributes<HTMLDivElement> & { src: string; alt?: string; progress?: number; aspect?: number; caption?: string; estimatedDuration?: number; onRevealComplete?: () => void; onError?: () => void };
const ReferenceGridReveal = gridReveal.GridReveal as unknown as ComponentType<GridRevealProps>;
export function GridReveal({ className, ...props }: GridRevealProps) { return <ReferenceGridReveal {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />; }

type AutomationProps<T> = { value: T; onChange: (value: T) => void };
function automationField<T>(name: string) {
  const Reference = automation[name] as ComponentType<AutomationProps<T>>;
  return function AutomationField(props: AutomationProps<T>) { return <div className={useUiClass('g-ref g-catalog-field')}><Reference {...props} /></div>; };
}
export const DatePicker = automationField<string>('DatePicker');
export const DateRangePicker = automationField<{ start: string; end: string }>('DateRangePicker');
export const TimezonePicker = automationField<string>('TimezonePicker');
export const ActiveWindowPicker = automationField<{ start: string; end: string; overnight?: boolean }>('ActiveWindowPicker');
export const RecurrencePicker = automationField<Record<string, unknown>>('RecurrencePicker');
export const PublicationRules = automationField<Record<string, boolean>>('PublicationRules');

type VideoControlsProps = HTMLAttributes<HTMLDivElement> & { videoRef: RefObject<HTMLVideoElement | null>; defaultVolume?: number; compact?: boolean };
const ReferenceVideoControls = videoControls.VideoControls as unknown as ComponentType<VideoControlsProps>;
export function VideoControls({ className, ...props }: VideoControlsProps) { return <ReferenceVideoControls {...props} className={useUiClass(`g-ref ${className ?? ''}`)} />; }

type SocialAgentAvatarProps = { network: 'tiktok' | 'instagram'; variant?: 'studio' | 'pop' | 'soft'; state?: 'idle' | 'listening' | 'analyzing' | 'planning' | 'creating' | 'ready' | 'attention' | 'error'; size?: number; animated?: boolean; followPointer?: boolean; decorative?: boolean };
const ReferenceSocialAvatar = socialAgent.SocialAgentAvatar as ComponentType<SocialAgentAvatarProps>;
export function SocialAgentAvatar(props: SocialAgentAvatarProps) { return <span className={useUiClass('g-ref')}><ReferenceSocialAvatar {...props} /></span>; }
