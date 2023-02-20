import { AppearanceProps } from '../../interfaces';
import { getAllColorsAsArray } from '../../utils';

export default {
  title: 'Atoms/AdTech Button',
  argTypes: {
    color: {
      type: {
        name: typeof AppearanceProps['color'],
      },
      control: {
        type: 'select',
        options: [...getAllColorsAsArray()],
      },
    },
  },
};

const Template = args =>
  `<adt-button color="${args.color}" rounded="${args.rounded}" sharp="${args.sharp}">${
    args.leftContent ? `<div slot="left">${args.leftContent}</div>` : ''
  }Click me!${
    args.rightContent ? `<div slot="right">${args.rightContent}</div>` : ''
  }</adt-button>`;

export const Default = Template.bind({});
Default.args = {
  color: '',
  rounded: false,
  sharp: false,
};

export const WithSlots = Template.bind({});
WithSlots.args = {
  color: 'primary',
  rounded: false,
  sharp: false,
  leftContent: '<p>Left!</p>',
  rightContent: '<p>Right!</p>',
};
