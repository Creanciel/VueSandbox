import type { Meta, StoryObj } from '@storybook/vue3';
import HelloWorld from './HelloWorld.vue';

const meta = {
  title: 'HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
  argTypes: {
    msg: { control: 'text' },
  },
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    msg: 'Hello Storybook',
  },
};

export const CustomMessage: Story = {
  args: {
    msg: 'カスタムメッセージ',
  },
};

export const LongMessage: Story = {
  args: {
    msg: 'これは長いメッセージのサンプルです。storybookでの表示確認用です。',
  },
};
