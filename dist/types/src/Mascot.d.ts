import './mascot.css';
export type MascotState = 'idle' | 'listening' | 'analyzing' | 'planning' | 'creating' | 'ready' | 'attention' | 'error';
export type MascotCharacter = 'nico' | 'lumi';
export type MascotVariant = 'studio' | 'pop' | 'soft';
/** Accessible appearance choices using the same original avatar engine. */
export declare function MascotVariantPicker({ value, onChange, label, description, options, disabled }: {
    value: MascotVariant;
    onChange: (variant: MascotVariant) => void;
    label: string;
    description: string;
    options: {
        value: MascotVariant;
        label: string;
    }[];
    disabled?: boolean;
}): import("react").JSX.Element;
/** Original library engine: morphs, blink, cursor gaze and visibility-aware animation. */
export declare function Mascot({ character, variant, state, size, pauseLabel, resumeLabel, className }: {
    character?: MascotCharacter;
    variant?: MascotVariant;
    state?: MascotState;
    size?: number;
    pauseLabel: string;
    resumeLabel: string;
    className?: string;
}): import("react").JSX.Element;
