/** Original composition, menu icons and send motion, connected to application features. */
export declare function ChatComposer({ onSend, onDraftChange, onAttach, onMic, micState, micLabel, messageLabel, attachLabel, sendLabel, voiceControls, insertion, placeholder, attachDisabled, disabled }: {
    onSend: (message: string) => void;
    onAttach: () => void;
    onMic: () => void;
    onDraftChange?: (message: string) => void;
    micState?: 'idle' | 'recording' | 'busy';
    micLabel?: string;
    messageLabel?: string;
    attachLabel?: string;
    sendLabel?: string;
    voiceControls?: {
        cancel: () => void;
        stop: () => void;
        send: () => void;
        levels: number[];
        seconds: number;
        cancelLabel: string;
        stopLabel: string;
        sendLabel: string;
        processingLabel: string;
    };
    insertion?: {
        id: number;
        text: string;
        submit?: boolean;
        replace?: boolean;
    };
    placeholder: string;
    attachDisabled?: boolean;
    disabled?: boolean;
}): import("react").JSX.Element;
