// The single maintained source for Genesis-specific decisions. Reference theme
// and motion values are read from the pinned authorised CSS by ui:foundations.
export const brand = { accent: '#d4ff00', onAccent: '#141800', readableAccentLight: '#485700' };
export const typography = {
  display: { size: 30, line: 36, weight: 500, tracking: '-1px' },
  title: { size: 20, line: 26, weight: 500, tracking: '-.4px' },
  body: { size: 14, line: 22, weight: 400 },
  label: { size: 10, line: 14, weight: 500, tracking: '.14em' },
  numeric: { size: 13, line: 18, weight: 400, numeric: 'tabular-nums' },
};
// Legacy names resolve to the five reference roles, never extra font scales.
export const compatibilityTypography = {
  caption: { size: typography.numeric.size, line: typography.numeric.line },
  uiLarge: { size: typography.body.size, line: typography.body.line },
  section: { size: typography.title.size, line: typography.title.line },
};
export const fonts = { sans: 'Arial, sans-serif', mono: 'ui-monospace, SFMono-Regular, Menlo, monospace', preservedJourney: 'Inter, system-ui, sans-serif' };
export const spacing = [4, 8, 12, 16, 24, 32];
export const radii = [8, 12, 16, 28];
export const heights = { micro: 28, compact: 38, primary: 48, referenceControl: 36 };
export const iconSizes = { support: 14, control: 18, emphasis: 20 };
export const feedbackColors = { danger: '#e43d32', dangerHover: '#d83228', success: '#22c55e', warning: '#f2b53b' };
export const springs = { switch: { type: 'spring', stiffness: 500, damping: 30 } };
// Component geometry in the original implementation that is not in the six
// foundation examples. Keeping it explicit avoids silently resizing controls.
export const geometry = { controlRadius: 10, beamRadius: 11, iconRadius: 8, switchWidth: 40, switchHeight: 22, switchThumb: 16, switchInset: 3, switchTravel: 18, numberWidth: 72, focusWidth: 2, focusOffset: 3 };

export const componentTokens = {
  'opacity-disabled': '.5', 'scale-pressed': '.98', 'lift-hover': '-1px',
  'primary-surface': '#202020', 'primary-ink': '#fff',
  'shadow-thumb': '0 1px 3px #0003', 'shadow-popover': '0 8px 24px #0002',
  'control-weight': '600', 'caption-size': '12px', 'label-small-size': '11px',
};

// Existing data/feedback semantics are not brand accents. Centralize their
// current values without turning an error, score or warning into lime.
export const domainThemes = {
  dark: { contrast: '#ffffff', glass: '#000000', success: '#22c55e', successDim: '#16a34a', danger: '#ff6b7a', warning: '#f2b53b' },
  light: { contrast: '#161c0e', glass: '#ffffff', success: '#147d3d', successDim: '#116632', danger: '#bb273e', warning: '#875a00' },
};
