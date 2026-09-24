import type { CSSProperties, ReactNode, Ref } from 'react';
import { icons } from '../vendor/loader.mjs';
import foundations from './foundations.json';
import { useUiClass } from './theme';
export type LegacyIconName = "arrow" | "arrowUp" | "people" | "layers" | "chart" | "lock" | "eye" | "eyeOff" | "close" | "menu" | "check" | "logout" | "globe" | "sun" | "moon" | "search" | "home" | "flask" | "history" | "center_focus_strong" | "view_list";
const paths: Record<LegacyIconName, ReactNode> = {
  center_focus_strong: <><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /><circle cx="12" cy="12" r="3" /></>,
  view_list: <><path d="M9 6h12M9 12h12M9 18h12M3 6h1M3 12h1M3 18h1" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  moon: <path d="M20.7 13A9 9 0 0 1 11 3.3 9 9 0 1 0 20.7 13Z" />,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  home: <><path d="m3 10 9-7 9 7v10H3V10Z" /><path d="M9 20v-7h6v7" /></>,
  flask: <><path d="M9 3h6M10 3v7L4 19a1.3 1.3 0 0 0 1 2h14a1.3 1.3 0 0 0 1-2l-6-9V3M7 15h10" /></>,
  history: <><path d="M3 5v5h5M3 10a9 9 0 1 1 1 7M12 7v5l3 2" /></>,
  arrow: <><path d="M4 12h15M13 6l6 6-6 6" /></>,
  arrowUp: <><path d="M6 18 18 6M6 6h12v12" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
  chart: <><path d="M4 4v16h16M8 15l4-5 4 2 5-7" /></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  eyeOff: <><path d="m3 3 18 18M10 5a14 14 0 0 1 2 0c6.5 0 10 7 10 7a19 19 0 0 1-3 4M6 6a20 20 0 0 0-4 6s3.5 7 10 7a12 12 0 0 0 5-1M10 10a3 3 0 0 0 4 4" /></>,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  check: <path d="m5 12 4 4L19 6" />,
  logout: <><path d="M10 4H5v16h5M10 12h11m-4-4 4 4-4 4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
};
const aliases: Record<string, string> = {
  sun: 'Sun', moon: 'Moon', search: 'Search', home: 'Home', arrow: 'ChevronRight', arrowUp: 'ArrowUpRight',
  people: 'Users', close: 'X', check: 'Check', globe: 'Globe2', eye: 'Eye', history: 'RotateCcw',
  add: 'Plus', analytics: 'SlidersHorizontal', arrow_back: 'ChevronLeft', arrow_forward: 'ChevronRight',
  bolt: 'Sparkles', cast: 'Video', check_circle: 'CircleCheck', chevron_right: 'ChevronRight', close_fullscreen: 'X',
  data_object: 'FileText', delete: 'Trash2', description: 'FileText', download: 'Download', error: 'AlertCircle',
  expand_more: 'ChevronDown', face: 'Users', fact_check: 'CircleCheck', group: 'Users', groups: 'Users', image: 'Image',
  info: 'AlertCircle', insights: 'SlidersHorizontal', inventory_2: 'Folder', language: 'Globe2', open_in_new: 'ArrowUpRight',
  person: 'Users', person_search: 'Search', play_arrow: 'Play', refresh: 'RotateCcw', replay: 'Repeat2', restart_alt: 'RotateCcw',
  save: 'Download', science: 'Bulb', search_off: 'Search', settings: 'Settings2', smart_toy: 'Robot', source: 'FileText',
  stop_circle: 'Pause', timer: 'Clock3', troubleshoot: 'Search', tune: 'SlidersHorizontal', verified: 'CircleCheck',
  video_library: 'Video', videocam: 'Video', calendar_today: 'CalendarDays', schedule: 'Clock3',
  account_tree: 'LayoutGrid', badge: 'Tag', code: 'FileText', curve_basis: 'SlidersHorizontal', dns: 'LayoutGrid',
  hub: 'LayoutGrid', route: 'Share2', storage: 'Folder', terminal: 'FileText',
  adjust: 'Eye', apps: 'LayoutGrid', assignment: 'FileText', auto_awesome: 'Sparkles', autorenew: 'RotateCcw',
  cancel: 'X', content_copy: 'Copy', done_all: 'Check', exit_to_app: 'logout', expand_less: 'ChevronDown',
  forum: 'Mail', fullscreen: 'ArrowUpRight', fullscreen_exit: 'ArrowUpRight', grid_view: 'LayoutGrid',
  help: 'Bulb', help_outline: 'Bulb', hourglass_empty: 'Clock3', keep: 'Tag', keep_off: 'Tag',
  list_alt: 'FileText', menu_book: 'FileText', pause_circle: 'Pause', picture_as_pdf: 'FileText', play_circle: 'Play',
  progress_activity: 'LoaderCircle', public: 'Globe2', quiz: 'FileText', rate_review: 'Pencil', remove_circle: 'Minus',
  rocket_launch: 'Send', schema: 'LayoutGrid', task_alt: 'CircleCheck',
  database: 'Folder', filter_alt: 'ListFilter', leaderboard: 'chart', map: 'Globe2',
};
export interface IconAnimationHandle { startAnimation: () => void; stopAnimation: () => void }
export interface IconProps {
  name: string; size?: number; className?: string; label?: string; style?: CSSProperties;
  /** Opt in to controlling the original animation from a parent interaction. */
  animationRef?: Ref<IconAnimationHandle>;
}
/** Original animated SVGs, with local semantic extensions for app-only glyphs. */
export function Icon({ name, size = foundations.iconSizes.control, className = '', label, style, animationRef }: IconProps) {
  const resolved = aliases[name] ?? name;
  const Glyph = icons[resolved];
  const classes = useUiClass('g-ref g-icon ' + className);
  return <span className={classes} style={{ width: size, height: size, transform: name === 'expand_less' || name === 'fullscreen_exit' ? 'rotate(180deg)' : undefined, ...style }} aria-hidden={label ? undefined : true} role={label ? 'img' : undefined} aria-label={label} data-icon={name}>
    {Glyph ? <Glyph size={size} animationRef={animationRef} /> : <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[resolved as LegacyIconName] ?? <><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 12h8M12 8v8" /></>}</svg>}
  </span>;
}
