import './file-upload.css';
export type FileUploadProps = {
    singleSlot?: boolean;
    retryUploadLabel?: (name: string) => string;
    uploadingLabel?: string;
    processingLabel?: string;
    accept: string;
    maxSize: number;
    maxFiles?: number;
    multiple?: boolean;
    disabled?: boolean;
    ariaLabel: string;
    browseLabel: string;
    dropzoneTitle: string;
    dropzoneDescription: string;
    libraryLabel: string;
    validateFile?: (file: File) => true | string;
    onUpload: (file: File, controls: {
        setProgress: (percent: number) => void;
    }) => Promise<void>;
};
/** Original dropzone, picker, paste, drag/drop and upload queue; progress is supplied by the application. */
export declare function FileUpload({ singleSlot, uploadingLabel, processingLabel, retryUploadLabel, ...props }: FileUploadProps): import("react").JSX.Element;
