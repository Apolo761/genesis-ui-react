import { memo, type ComponentType, type CSSProperties, type HTMLAttributes } from 'react';
import { folder } from '../vendor/loader.mjs';
import { useUiClass } from './theme';
import './folder.css';
import blackThumbnail from './folder-thumbnails/black.webp';
import blueThumbnail from './folder-thumbnails/blue.webp';
import greenThumbnail from './folder-thumbnails/green.webp';
import purpleThumbnail from './folder-thumbnails/purple.webp';
import orangeThumbnail from './folder-thumbnails/orange.webp';
import pinkThumbnail from './folder-thumbnails/pink.webp';
import whiteThumbnail from './folder-thumbnails/white.webp';

export const FOLDER_COLORS = ['black', 'blue', 'green', 'purple', 'orange', 'pink'] as const;
export type FolderColor = typeof FOLDER_COLORS[number];
export const FOLDER_COLOR_SWATCHES: Record<FolderColor, string> = {
  black: '#292929', blue: '#50B1FD', green: '#45C994', purple: '#A78BFA', orange: '#F7A34B', pink: '#EC83B6',
};
const coloredThemes: Partial<Record<FolderColor, [string, string, string]>> = {
  green: ['#45C994', '#269C70', '#8AE6BD'],
  purple: ['#A78BFA', '#8263D8', '#CEB8FF'],
  orange: ['#F7A34B', '#DC852E', '#FFD09A'],
  pink: ['#EC83B6', '#D25F98', '#FFBBDD'],
};

export interface FolderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'children'> {
  color?: FolderColor | 'white';
  size?: 'sm' | 'md' | 'lg';
  /** Cached artwork for dense lists; interactive keeps the original 3D preview. */
  variant?: 'interactive' | 'thumbnail';
}

const Reference = folder.Folder as ComponentType<FolderProps>;
const sizes = { sm: .65, md: 1, lg: 1.35 };
const thumbnailSources: Record<FolderColor | 'white', string> = {
  black: blackThumbnail,
  blue: blueThumbnail,
  green: greenThumbnail,
  purple: purpleThumbnail,
  orange: orangeThumbnail,
  pink: pinkThumbnail,
  white: whiteThumbnail,
};

/** The thumbnail shares the original artwork without per-card motion/blur. */
export const Folder = memo(function Folder({ className, color = 'black', size = 'md', variant = 'interactive', style, ...props }: FolderProps) {
  const uiClass = useUiClass(`g-ref g-folder ${variant === 'thumbnail' ? 'g-folder--thumbnail' : ''} ${className ?? ''}`);
  if (variant === 'thumbnail') {
    const source = thumbnailSources[color];
    return <div {...props} data-slot="folder" data-folder-color={color} data-folder-rendering="thumbnail" className={uiClass}
      style={{ width: 321 * sizes[size], height: 270 * sizes[size], ...style }}>
      <img src={source} alt="" width={746} height={580} draggable={false} loading="lazy" decoding="async" />
    </div>;
  }
  const palette = color === 'white' ? undefined : coloredThemes[color];
  const theme = palette ? { '--g-folder-back': palette[0], '--g-folder-flap': palette[1], '--g-folder-stroke': palette[2] } as CSSProperties : {};
  return <Reference {...props} size={size} color={palette ? 'blue' : color} data-folder-color={color}
    style={{ ...theme, ...style }} className={uiClass} />;
});
