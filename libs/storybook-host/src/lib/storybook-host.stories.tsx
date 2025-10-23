import type { Meta, StoryObj } from '@storybook/react-vite';
import { StorybookStorybookHost } from './storybook-host';
import { expect } from 'storybook/test';

const meta = {
  component: StorybookStorybookHost,
  title: 'StorybookStorybookHost',
} satisfies Meta<typeof StorybookStorybookHost>;
export default meta;

type Story = StoryObj<typeof StorybookStorybookHost>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/StorybookStorybookHost/gi)).toBeTruthy();
  },
} satisfies Story;
