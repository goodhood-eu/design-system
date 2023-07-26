import type {Meta, StoryObj} from '@storybook/react';
import { AriaCombobox } from './aria-combobox';
import {Item} from "react-stately";
const meta: Meta<typeof AriaCombobox> = {
  component: AriaCombobox,
};

export default meta;
type Story = StoryObj<typeof AriaCombobox>;

export const Basic: Story = {
  render: () => (<AriaCombobox> <Item key="red panda">Red Panda</Item>
    <Item key="cat">Cat</Item>
    <Item key="dog">Dog</Item>
    <Item key="aardvark">Aardvark</Item>
    <Item key="kangaroo">Kangaroo</Item>
    <Item key="snake">Snake</Item></AriaCombobox>)
};