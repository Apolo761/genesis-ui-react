import { useEffect, useState, type ComponentType, type ReactNode } from 'react';
import { reasoningSteps } from '../vendor/loader.mjs';
import { useUiClass } from './theme';
export type GenerationStep = { id: string; label: string; status: 'pending' | 'active' | 'done' | 'error'; description?: string; action?: ReactNode };
const Root = reasoningSteps.ReasoningSteps as ComponentType<{children: ReactNode; open: boolean; onOpenChange: (open: boolean) => void; className?: string}>;
const Trigger = reasoningSteps.ReasoningStepsTrigger as ComponentType<{children: ReactNode}>;
const Content = reasoningSteps.ReasoningStepsContent as ComponentType<{children: ReactNode}>;
const Step = reasoningSteps.ReasoningStep as ComponentType<GenerationStep & {children?: ReactNode}>;
/** Original library steps: disclosure, elapsed duration, connectors and state motion. */
export function GenerationSteps({ title, steps }: { title: string; steps: GenerationStep[] }) {
  const complete = steps.length > 0 && steps.every(step => step.status === 'done');
  const [open, setOpen] = useState(!complete);
  useEffect(() => { setOpen(!complete); }, [complete]);
  return <div className={useUiClass('g-ref genesis-generation-steps')} role="status" aria-live="polite" aria-atomic="false">
    <Root open={open} onOpenChange={setOpen} className="!max-w-none"><Trigger>{title}</Trigger><Content>{steps.map(({action, ...step}) => <Step key={step.id} {...step}>{action}</Step>)}</Content></Root>
  </div>;
}
