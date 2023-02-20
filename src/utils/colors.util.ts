import { AdTechComponentColors, AdTechNumericColors, AdTechStatusColors } from '../enums';

/**
 *
 * @returns An array of all the possible component colors
 */
export const getAllColorsAsArray = () => {
  return [
    ...Object.values(AdTechComponentColors),
    ...Object.values(AdTechStatusColors),
    ...Object.values(AdTechNumericColors),
  ];
};

export const getColorFillClasses = (
  color?: AdTechComponentColors | AdTechNumericColors | AdTechStatusColors,
  hover?: boolean
): string[] => {
  const classes: string[] = [];
  const btnClr = color || AdTechComponentColors.primary;

  switch (btnClr) {
    case AdTechComponentColors.primary:
    case AdTechComponentColors.secondary:
    case AdTechComponentColors.accent:
    case AdTechNumericColors.positive:
    case AdTechNumericColors.negative: {
      classes.push(`${btnClr}-bg`);
      if (hover) {
        classes.push(`${btnClr}-bg-hover`);
      }
      break;
    }
    case AdTechStatusColors.error:
    case AdTechStatusColors.success:
    case AdTechStatusColors.warning:
    case AdTechStatusColors.info:
    case AdTechStatusColors.neutral: {
      classes.push(`${btnClr}-fill`);
      if (hover) {
        classes.push(`${btnClr}-fill-hover`);
      }
      break;
    }
  }

  return classes;
};

export const getColorOutlineClasses = (
  color?: AdTechComponentColors | AdTechNumericColors | AdTechStatusColors,
  hover?: boolean
): string[] => {
  const classes: string[] = [];

  const clr = color || AdTechComponentColors.primary;

  switch (clr) {
    case AdTechComponentColors.primary:
    case AdTechComponentColors.secondary:
    case AdTechComponentColors.accent:
    case AdTechNumericColors.positive:
    case AdTechNumericColors.negative:
    case AdTechStatusColors.error:
    case AdTechStatusColors.success:
    case AdTechStatusColors.warning:
    case AdTechStatusColors.info:
    case AdTechStatusColors.neutral: {
      classes.push(`${clr}-border`);
      if (hover) {
        classes.push(`${clr}-border-hover`);
      }
      break;
    }
  }

  return classes;
};

export const getColorFormOutlineClasses = (
  color?: AdTechComponentColors | AdTechNumericColors | AdTechStatusColors
): string[] => {
  const classes: string[] = [];

  const clr = color || AdTechComponentColors.primary;

  switch (clr) {
    case AdTechComponentColors.primary:
    case AdTechComponentColors.secondary:
    case AdTechComponentColors.accent:
    case AdTechNumericColors.positive:
    case AdTechNumericColors.negative:
    case AdTechStatusColors.error:
    case AdTechStatusColors.success:
    case AdTechStatusColors.warning:
    case AdTechStatusColors.info:
    case AdTechStatusColors.neutral: {
      classes.push(`${clr}-border-form`);
      break;
    }
  }

  return classes;
};

export const getBrClasses = ({
  rounded,
  sharp,
}: {
  rounded: boolean;
  sharp: boolean;
}): string[] => {
  const classes = [];

  if (rounded) {
    classes.push('br-rounded');
  }

  if (sharp) {
    classes.push('br-sharp');
  }

  return classes;
};
