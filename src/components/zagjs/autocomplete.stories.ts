import type { Meta, StoryObj } from '@storybook/react';
import AutoComplete from './autocomplete';

const meta = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  tags: ['components'],
  argTypes: { getOptions: { action: 'input' } },
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    getOptions: async (value) => {
      const response = await fetch(`https://dummyjson.com/products/search?q=${value}`) ;
      const { products } = await response.json() as {
        products: Array<{ title: string}>
      };

      return products.map(({ title }) => title);
    }
  },
};
