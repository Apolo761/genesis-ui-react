import type { ReactNode } from 'react';
import { alerts } from '../vendor/loader.mjs';
import { useUiClass } from './theme';

/** Pinned library alert, kept inline and persistent inside notification lists. */
export function Alert({ title, message, icon, appearance = 'info', action }: {
  title: string; message: string; icon?: ReactNode;
  appearance?: 'info' | 'success' | 'warning' | 'error'; action?: ReactNode;
}) {
  const Component = alerts.Alert;
  return <Component className={useUiClass('g-ref')} title={title} message={message} icon={icon}
    appearance={appearance} variant="inline" size="lg" timeout={0} dismissible={false} titleLines={2} action={action} />;
}
