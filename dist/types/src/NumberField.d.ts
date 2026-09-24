/** The journey's +/- control, with direct entry and no native browser spinners. */
export declare function NumberField({ label, decreaseLabel, increaseLabel, value, onChange, min, max, disabled, hint }: {
    label: string;
    decreaseLabel: string;
    increaseLabel: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max: number;
    disabled?: boolean;
    hint?: string;
}): import("react").JSX.Element;
