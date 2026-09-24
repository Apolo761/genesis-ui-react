import { type HTMLAttributes } from 'react';
import './folder.css';
export declare const FOLDER_COLORS: readonly ["black", "blue", "green", "purple", "orange", "pink"];
export type FolderColor = typeof FOLDER_COLORS[number];
export declare const FOLDER_COLOR_SWATCHES: Record<FolderColor, string>;
export interface FolderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'children'> {
    color?: FolderColor | 'white';
    size?: 'sm' | 'md' | 'lg';
    /** Cached artwork for dense lists; interactive keeps the original 3D preview. */
    variant?: 'interactive' | 'thumbnail';
}
/** The thumbnail shares the original artwork without per-card motion/blur. */
export declare const Folder: import("react").NamedExoticComponent<FolderProps>;
