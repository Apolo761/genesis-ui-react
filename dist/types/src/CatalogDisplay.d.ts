import { type HTMLAttributes, type ReactNode } from 'react';
export declare function Card({ className, ...props }: HTMLAttributes<HTMLElement>): import("react").JSX.Element;
export declare function Panel({ title, actions, className, children, ...props }: HTMLAttributes<HTMLElement> & {
    title?: ReactNode;
    actions?: ReactNode;
}): import("react").JSX.Element;
export declare function Divider({ label, className }: {
    label?: string;
    className?: string;
}): import("react").JSX.Element;
export declare function Toolbar({ label, children, className }: {
    label: string;
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export declare function IconBar({ label, actions }: {
    label: string;
    actions: {
        id: string;
        label: string;
        icon: ReactNode;
        onClick: () => void;
        disabled?: boolean;
        selected?: boolean;
    }[];
}): import("react").JSX.Element;
export type DataListItem = {
    id: string;
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    leading?: ReactNode;
    trailing?: ReactNode;
    onClick?: () => void;
};
export declare function DataList({ items, label }: {
    items: DataListItem[];
    label?: string;
}): import("react").JSX.Element;
export declare function KeyValue({ label, value }: {
    label: ReactNode;
    value: ReactNode;
}): import("react").JSX.Element;
export type TimelineEvent = {
    id: string;
    title: ReactNode;
    description?: ReactNode;
    time?: ReactNode;
    tone?: 'neutral' | 'success' | 'warning' | 'danger';
};
export declare function ActivityTimeline({ events, label }: {
    events: TimelineEvent[];
    label?: string;
}): import("react").JSX.Element;
export type CarouselSlide = {
    src: string;
    alt: string;
    kind?: 'image' | 'video';
    poster?: string;
    caption?: string;
};
export declare function CarouselPreview({ slides, initialIndex, label }: {
    slides: CarouselSlide[];
    initialIndex?: number;
    label?: string;
}): import("react").JSX.Element | null;
export declare function GenerationStatus({ label, state, detail, progress }: {
    label: string;
    state: 'queued' | 'running' | 'done' | 'error';
    detail?: string;
    progress?: number;
}): import("react").JSX.Element;
export declare function PromptInput({ value, onChange, onSubmit, placeholder, disabled, submitLabel, rows }: {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    submitLabel?: string;
    rows?: number;
}): import("react").JSX.Element;
export type AgentPresenceItem = {
    id: string;
    name: string;
    network: 'tiktok' | 'instagram';
    state: 'idle' | 'listening' | 'analyzing' | 'planning' | 'creating' | 'ready' | 'attention' | 'error';
};
export declare function AgentPresence({ agents, label }: {
    agents: AgentPresenceItem[];
    label?: string;
}): import("react").JSX.Element;
export declare const SocialAgents: typeof AgentPresence;
export type GenerationQueueItem = {
    id: string;
    label: string;
    status: 'queued' | 'running' | 'done' | 'error';
    progress?: number;
    detail?: string;
};
export declare function GenerationQueue({ items, onCancel, label }: {
    items: GenerationQueueItem[];
    onCancel?: (id: string) => void;
    label?: string;
}): import("react").JSX.Element;
