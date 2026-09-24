import { useRef, useState, type ComponentType } from 'react';
import { Button } from './controls';
import { ProgressBar } from './ProgressBar';
import { fileUpload } from '../vendor/loader.mjs';
import { useUiClass } from './theme';
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
  onUpload: (file: File, controls: { setProgress: (percent: number) => void }) => Promise<void>;
};
const Reference = fileUpload.FileUpload as ComponentType<FileUploadProps & { className: string; simulateUpload: boolean; showClearAll: boolean }>;

/** Original dropzone, picker, paste, drag/drop and upload queue; progress is supplied by the application. */
export function FileUpload({ singleSlot = false, uploadingLabel, processingLabel, retryUploadLabel = name => `Tentar novamente o upload de ${name}`, ...props }: FileUploadProps) {
  const className = useUiClass('g-ref genesis-file-upload');
  const [pending, setPending] = useState<{ name: string; progress: number } | null>(null);
  const [error, setError] = useState('');
  const selected = useRef<File | null>(null);
  async function upload(file: File, controls: { setProgress: (percent: number) => void }) {
    setError('');
    selected.current = file;
    if (singleSlot) setPending({ name: file.name, progress: 0 });
    try {
      await props.onUpload(file, { setProgress: percent => {
        controls.setProgress(percent);
        if (singleSlot) setPending({ name: file.name, progress: percent });
      } });
    } catch (caught) {
      if (!singleSlot) throw caught;
      setError(caught instanceof Error ? caught.message : String(caught));
    } finally { setPending(null); }
  }
  return <div className={className}>
    {pending ? <div className="genesis-file-upload-pending" role="status">
      <ProgressBar value={pending.progress >= 100 ? null : pending.progress} tone="brand"
        label={pending.progress >= 100 ? processingLabel : uploadingLabel}
        helper={<span className="genesis-file-upload-name" title={pending.name}>{pending.name.length > 64 ? `${pending.name.slice(0, 61)}…` : pending.name}</span>}
        ariaLabel={props.ariaLabel} />
    </div> : <Reference {...props} onUpload={upload} className="!max-w-none" simulateUpload={false} showClearAll={false} />}
    {error && <div className="genesis-file-upload-error"><p role="alert">{error}</p>{selected.current && <Button type="button" className="genesis-file-upload-retry" variant="secondary" title={selected.current.name} aria-label={retryUploadLabel(selected.current.name)} disabled={props.disabled} onClick={() => selected.current && void upload(selected.current, { setProgress: () => {} })}>{retryUploadLabel(selected.current.name.length > 48 ? `${selected.current.name.slice(0, 32)}…${selected.current.name.slice(-12)}` : selected.current.name)}</Button>}</div>}
  </div>;
}
