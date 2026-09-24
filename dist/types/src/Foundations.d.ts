import foundations from './foundations.json';
export { foundations };
export declare const colors: {
    light: {
        page: string;
        stage: string;
        surface: string;
        recess: string;
        ink: string;
        secondary: string;
        glyph: string;
        line: string;
        floating: string;
        hover: string;
    };
    dark: {
        page: string;
        stage: string;
        surface: string;
        recess: string;
        ink: string;
        secondary: string;
        glyph: string;
        line: string;
        floating: string;
        hover: string;
    };
};
export declare const typography: {
    display: {
        size: number;
        line: number;
        weight: number;
        tracking: string;
    };
    title: {
        size: number;
        line: number;
        weight: number;
        tracking: string;
    };
    body: {
        size: number;
        line: number;
        weight: number;
    };
    label: {
        size: number;
        line: number;
        weight: number;
        tracking: string;
    };
    numeric: {
        size: number;
        line: number;
        weight: number;
        numeric: string;
    };
};
export declare const spacing: number[];
export declare const motionTokens: {
    "--ease-in": string;
    "--ease-out": string;
    "--ease-in-out": string;
    "--default-transition-duration": string;
    "--duration-stagger": string;
    "--duration-micro": string;
    "--duration-quick": string;
    "--duration-fast": string;
    "--duration-medium": string;
    "--duration-slow": string;
    "--duration-very-slow": string;
    "--ease-smooth-out": string;
    "--ease-linear": string;
    "--ease-bounce": string;
    "--ease-bounce-strong": string;
    "--resize-dur": string;
    "--resize-ease": string;
    "--digit-dur": string;
    "--digit-ease": string;
    "--badge-slide-dur": string;
    "--badge-pop-dur": string;
    "--badge-pop-close-dur": string;
    "--badge-fade-dur": string;
    "--badge-fade-close-dur": string;
    "--badge-slide-ease": string;
    "--badge-pop-ease": string;
    "--badge-close-ease": string;
    "--text-swap-dur": string;
    "--text-swap-ease": string;
    "--dropdown-open-dur": string;
    "--dropdown-close-dur": string;
    "--dropdown-ease": string;
    "--modal-open-dur": string;
    "--modal-close-dur": string;
    "--modal-ease": string;
    "--panel-open-dur": string;
    "--panel-close-dur": string;
    "--panel-ease": string;
    "--page-slide-dur": string;
    "--page-fade-dur": string;
    "--page-slide-ease": string;
    "--page-fade-ease": string;
    "--icon-swap-dur": string;
    "--icon-swap-ease": string;
    "--check-opacity-dur": string;
    "--check-rotate-dur": string;
    "--check-bob-dur": string;
    "--check-blur-dur": string;
    "--check-path-dur": string;
    "--check-ease-out": string;
    "--check-ease-opacity": string;
    "--check-ease-rotate": string;
    "--check-ease-bob": string;
    "--check-ease-path": string;
    "--avatar-dur": string;
    "--avatar-ease-in": string;
    "--avatar-ease-out": string;
    "--shake-ease": string;
    "--revert-dur": string;
    "--clear-dur": string;
    "--clear-out-dur": string;
    "--clear-in-dur": string;
    "--clear-out-ease": string;
    "--clear-in-ease": string;
    "--pulse-dur": string;
    "--reveal-dur": string;
    "--reveal-ease": string;
    "--shimmer-dur": string;
    "--shimmer-ease": string;
    "--tabs-dur": string;
    "--tabs-ease": string;
    "--tt-in-dur": string;
    "--tt-out-dur": string;
    "--tt-in-ease": string;
    "--tt-out-ease": string;
    "--stagger-dur": string;
    "--stagger-ease": string;
    "--tilt-return-ease": string;
    "--tilt-follow-ease": string;
    "--tilt-glare-ease": string;
    "--morph-open-dur": string;
    "--morph-close-dur": string;
    "--morph-ease": string;
    "--morph-close-ease": string;
    "--morph-fade-dur": string;
    "--acc-ease": string;
    "--toast-ease": string;
    "--like-pop-ease": string;
    "--like-particle-dur": string;
    "--like-ease": string;
    "--learn-ease": string;
    "--check-ease": string;
    "--reel-dur": string;
    "--reel-ease": string;
    "--toggle-dur": string;
    "--toggle-ease": string;
    "--think-ease": string;
    "--reason-ease": string;
    "--stream-ease": string;
    "--matrix-ease": string;
    "--stack-ease": string;
};
export declare const animatedIconNames: string[];
export declare const brandIconNames: string[];
export interface AnimatedIconHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}
export declare const AnimatedIcon: import("react").ForwardRefExoticComponent<{
    name: string;
    size?: number;
    label?: string;
} & import("react").RefAttributes<AnimatedIconHandle>>;
export declare function BrandIcon({ name, size, label }: {
    name: string;
    size?: number;
    label?: string;
}): import("react").JSX.Element;
export declare const foundationSections: readonly [{
    readonly id: "colors-themes";
    readonly label: "Colors & themes";
}, {
    readonly id: "typography";
    readonly label: "Typography";
}, {
    readonly id: "spacing-radius";
    readonly label: "Spacing & radius";
}, {
    readonly id: "motion-tokens";
    readonly label: "Motion tokens";
}, {
    readonly id: "icons";
    readonly label: "Icons";
}, {
    readonly id: "animated-icons";
    readonly label: "Animated Icons";
}, {
    readonly id: "brand-icons";
    readonly label: "Brand Icons";
}];
export type FoundationSection = typeof foundationSections[number]['id'];
/** The original foundation board markup/CSS, populated by the same tokens that
 * the application consumes. This page is not an iframe or a second runtime. */
export declare function FoundationBoard({ section }: {
    section: FoundationSection;
}): import("react").JSX.Element;
