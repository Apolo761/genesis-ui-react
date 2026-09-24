export type StreamingTextProps = {
    text: string;
    speed?: number;
    delay?: number;
    settleDelay?: number;
    showCursor?: boolean;
    onComplete?: () => void;
    className?: string;
};
/** Original word-by-word reveal and reduced-motion behavior, with Genesis accent. */
export declare function StreamingText({ className, ...props }: StreamingTextProps): import("react").JSX.Element;
