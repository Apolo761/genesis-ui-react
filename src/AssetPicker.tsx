import { useState, type ComponentType } from 'react';
import { assetPicker } from '../vendor/loader.mjs';
import { useUiClass } from './theme';
import './asset-picker.css';

export type LibraryAsset = { id: string; name: string; kind: 'video' | 'image'; thumbnail?: string; meta?: string; keywords?: string[] };
export type AssetPickerProps = {
  assets: LibraryAsset[]; selected: string[]; onSelectionChange: (ids: string[]) => void;
  multiple?: boolean; query?: string; onQueryChange?: (query: string) => void;
  loading?: boolean; columns?: 3 | 4; emptyMessage?: string; className?: string;
};
const Reference = assetPicker.AssetPicker as ComponentType<AssetPickerProps>;
/** Original media-library composition, with real assets supplied by the feature. */
export function AssetPicker(props: AssetPickerProps) {
  const [failedThumbnails, setFailedThumbnails] = useState<string[]>([]);
  return <div className={useUiClass('g-ref g-asset-picker')} onErrorCapture={event => {
    if (event.target instanceof HTMLImageElement) {
      const failed = props.assets.find(asset => asset.thumbnail && new URL(asset.thumbnail, window.location.href).href === (event.target as HTMLImageElement).src);
      if (failed) setFailedThumbnails(ids => ids.includes(failed.id) ? ids : [...ids, failed.id]);
    }
  }} onKeyDown={event => {
    const options = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="option"]'));
    const index = options.indexOf(event.target as HTMLButtonElement);
    if (index < 0) return;
    const next = event.key === 'ArrowRight' ? index + 1 : event.key === 'ArrowLeft' ? index - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : -1;
    if (next < 0 || next >= options.length) return;
    event.preventDefault(); options[next]?.focus();
  }}><Reference {...props} assets={props.assets.map(asset => failedThumbnails.includes(asset.id) ? { ...asset, thumbnail: undefined } : asset)} /></div>;
}
