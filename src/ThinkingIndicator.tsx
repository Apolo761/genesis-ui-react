import type { ComponentType } from 'react';
import { thinkingIndicator } from '../vendor/loader.mjs';
import { useUiClass } from './theme';
const Reference = thinkingIndicator.ThinkingIndicator as ComponentType<{ words: string[]; className?: string }>;
/** Original morphing indicator; the status follows the glyph with a short fade. */
export function ThinkingIndicator({ text, className = '' }: { text: string; className?: string }) {
  return <Reference words={[text]} className={useUiClass(`g-ref g-thinking-indicator ${className}`)} />;
}
