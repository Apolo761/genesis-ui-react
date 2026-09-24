import type { ComponentType, ReactNode } from 'react';
import { mediaPreview } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

export type MediaPreviewProps = {
  src: string | null; poster?: string; alt: string; kind?: 'image' | 'video';
  aspect?: string; caption?: string; overlay?: ReactNode; loading?: boolean;
  size?: 'sm' | 'md' | 'lg'; onError?: () => void; title?: string;
};
const Reference = mediaPreview.MediaPreview as ComponentType<MediaPreviewProps>;

/** Original poster, playback control, caption, loading and media error states. */
export function MediaPreview(props: MediaPreviewProps) {
  return <div className={useUiClass('g-ref genesis-media-preview')}><Reference {...props} /></div>;
}
