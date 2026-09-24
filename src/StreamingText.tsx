import type { ComponentType } from 'react';
import { streamingText } from '../vendor/loader.mjs';
import { useUiClass } from './theme';
export type StreamingTextProps = { text: string; speed?: number; delay?: number; settleDelay?: number; showCursor?: boolean; onComplete?: () => void; className?: string };
const Reference = streamingText.StreamingText as ComponentType<StreamingTextProps>;
/** Original word-by-word reveal and reduced-motion behavior, with Genesis accent. */
export function StreamingText({ className = '', ...props }: StreamingTextProps) {
  return <Reference {...props} className={useUiClass(`g-ref g-streaming-text ${className}`)} />;
}
