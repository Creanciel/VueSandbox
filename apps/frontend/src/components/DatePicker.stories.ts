import type { Meta, StoryObj } from '@storybook/vue3';
import DatePicker from './DatePicker.vue';
import { ref } from 'vue';

const meta = {
  title: 'DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    modelValue: new Date(),
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
  type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => ({
    components: { DatePicker },
    setup: () => {
      const value = ref<Date>(new Date());
      return {
        value,
      };
    },
    template: `
  <DatePicker v-model="value" />
`,
  }),
};
