import { type ReactNode } from 'react';
export type GenerationStep = {
    id: string;
    label: string;
    status: 'pending' | 'active' | 'done' | 'error';
    description?: string;
    action?: ReactNode;
};
/** Original library steps: disclosure, elapsed duration, connectors and state motion. */
export declare function GenerationSteps({ title, steps }: {
    title: string;
    steps: GenerationStep[];
}): import("react").JSX.Element;
