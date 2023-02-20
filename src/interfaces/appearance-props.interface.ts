import {
  AdTechComponentColors,
  AdTechNumericColors,
  AdTechStatusColors,
} from '../enums';

export interface AppearanceProps {
  color?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;
  rounded?: boolean;
  sharp?: boolean;
}

export const AppearanceProps = {
  color: {
    type: String,
    required: false,
  },
  rounded: {
    type: Boolean,
    required: false,
  },
  sharp: {
    type: Boolean,
    required: false,
  },
};
