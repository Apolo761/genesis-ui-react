import type { ComponentType, ReactElement, Ref } from 'react';
// The generated distribution is the only untyped boundary. Public adapters
// below expose native DOM contracts, never this dictionary, to application code.
type Recovered = Record<string, ComponentType<Record<string, unknown>>>;
export const icons: Recovered;
export const primitives: Recovered & { RareButton: (props: Record<string, unknown>) => ReactElement; TextField: (props: Record<string, unknown>) => ReactElement; TextAreaField: (props: Record<string, unknown>) => ReactElement; SearchField: (props: Record<string, unknown>) => ReactElement };
export const motion: Recovered;
export const useReducedMotion: () => boolean | null;
export const buttons: Recovered;
export const flux: Recovered;
export const fields: Record<string, string>;
export const selection: Recovered & { Dropdown: (props: Record<string, unknown>) => ReactElement };
export const combobox: Recovered;
export const baseCombobox: Recovered;
export const feedback: Recovered;
export const progress: Recovered;
export const skeleton: Recovered & { Skeleton: { render: (props: Record<string, unknown>, ref: Ref<HTMLSpanElement>) => ReactElement } };
export const accordion: Recovered;
export const avatar: Recovered;
export const tabs: Recovered & { RareTabs: (props: Record<string, unknown>) => ReactElement; Pagination: (props: Record<string, unknown>) => ReactElement };
export const navigation: Recovered;
export const appSidebar: Recovered & { AppSidebarBrand: (props: Record<string, unknown>) => ReactElement };
export const breadcrumbs: Recovered;
export const settings: Recovered & { SettingsDialog: (props: Record<string, unknown>) => ReactElement };
export const dataTable: Recovered;
export const animatedIcons: Recovered;
export const brandIcons: Array<{ name: string; slug: string; title: string; themed: boolean; url: string; Icon: ComponentType<Record<string, unknown>> }>;
export const assetPicker: Record<string, unknown>;

export const socialAgent: Record<string, unknown>;

export const chatComposer: Recovered;

export const reasoningSteps: Recovered;
export const fileUpload: Recovered;
export const mediaPreview: Recovered;

export const streamingText: Recovered;

export const thinkingIndicator: Recovered;
export const alerts: Recovered;
export const folder: Recovered;
export const buttonGroup: Recovered;
export const fluxButton: Recovered;
export const automation: Recovered;
export const emptyStates: Recovered;
export const drawer: Recovered;
export const popover: Recovered;
export const contextMenu: Recovered;
export const gooeyNav: Recovered;
export const deleteButton: Recovered;
export const gridReveal: Recovered;
export const videoControls: Recovered;
export const animatedCounter: Recovered;
