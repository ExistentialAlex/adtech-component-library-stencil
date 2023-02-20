export const AdTechComponentColors = {
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
} as const;

export const AdTechStatusColors = {
  error: 'error',
  success: 'success',
  warning: 'warning',
  info: 'info',
  neutral: 'neutral',
} as const;

export const AdTechNumericColors = {
  positive: 'positive',
  negative: 'negative',
} as const;

export const AllAdTechColors = {
  ...AdTechComponentColors,
  ...AdTechStatusColors,
  ...AdTechNumericColors,
};

export type AdTechComponentColors = typeof AdTechComponentColors[keyof typeof AdTechComponentColors];
export type AdTechStatusColors = typeof AdTechStatusColors[keyof typeof AdTechStatusColors];
export type AdTechNumericColors = typeof AdTechNumericColors[keyof typeof AdTechNumericColors];
export type AllAdTechColors = typeof AllAdTechColors[keyof typeof AllAdTechColors];
