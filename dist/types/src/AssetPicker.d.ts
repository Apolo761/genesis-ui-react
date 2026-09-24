import './asset-picker.css';
export type LibraryAsset = {
    id: string;
    name: string;
    kind: 'video' | 'image';
    thumbnail?: string;
    meta?: string;
    keywords?: string[];
};
export type AssetPickerProps = {
    assets: LibraryAsset[];
    selected: string[];
    onSelectionChange: (ids: string[]) => void;
    multiple?: boolean;
    query?: string;
    onQueryChange?: (query: string) => void;
    loading?: boolean;
    columns?: 3 | 4;
    emptyMessage?: string;
    className?: string;
};
/** Original media-library composition, with real assets supplied by the feature. */
export declare function AssetPicker(props: AssetPickerProps): import("react").JSX.Element;
