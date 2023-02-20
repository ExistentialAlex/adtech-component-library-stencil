import { AppearanceProps } from '../../interfaces';
import { getAllColorsAsArray } from '../../utils';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/AdTech Menu',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    stringify: {
      type: {
        name: 'function',
      },
    },
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
  args: {
    rounded: false,
    sharp: false,
    color: 'secondary',
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args =>
  `<adt-menu color="${args.color}" rounded="${args.rounded}" sharp="${args.sharp}" stringify="${args.stringify}" template="${args.template}" value="${args.value}" items="${args.items}"></adt-menu>`;

interface myItem {
  id: number;
  text: string;
}

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  value: null,
};

export const NoItems = Template.bind({});
NoItems.args = {
  items: [],
  value: null,
};

export const CustomStringify = Template.bind({});
CustomStringify.args = {
  items: [
    {
      id: 1,
      text: 'my item',
    },
    {
      id: 2,
      text: 'my other item',
    },
    {
      id: 3,
      text: 'my third item',
    },
  ],
  value: null,
  stringify: (item: myItem) => item.text,
};

export const CustomStringifyWithSelection = Template.bind({});
CustomStringifyWithSelection.args = {
  items: [
    {
      id: 1,
      text: 'my item',
    },
    {
      id: 2,
      text: 'my other item',
    },
    {
      id: 3,
      text: 'my third item',
    },
  ],
  value: {
    id: 1,
    text: 'my item',
  },
  stringify: (item: myItem) => item.text,
};

export const CustomItemTemplate = Template.bind({});
CustomItemTemplate.args = {
  items: [
    {
      id: 1,
      text: 'my item',
    },
    {
      id: 2,
      text: 'my other item',
    },
    {
      id: 3,
      text: 'my third item',
    },
  ],
  value: {
    id: 1,
    text: 'my item',
  },
  stringify: (item: myItem) => item.text,
  template: (item: myItem) => `<div>${item.text}</div>`,
};
