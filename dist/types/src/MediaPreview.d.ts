import type { ReactNode } from 'react';
export type MediaPreviewProps = {
    src: string | null;
    poster?: string;
    alt: string;
    kind?: 'image' | 'video';
    aspect?: string;
    caption?: string;
    overlay?: ReactNode;
    loading?: boolean;
    size?: 'sm' | 'md' | 'lg';
    onError?: () => void;
    title?: string;
};
/** Original poster, playback control, caption, loading and media error states. */
export declare function MediaPreview(props: MediaPreviewProps): import("react").JSX.Element;
