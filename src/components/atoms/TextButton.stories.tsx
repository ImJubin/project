import type { Meta, StoryObj } from '@storybook/react';
import { TextButton } from './TextButton';

const meta = {
  title: 'Atoms/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'neutral', 'secondary'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: '확인',
    intent: 'primary',
  },
};

export const Neutral: Story = {
  args: {
    label: '취소',
    intent: 'neutral',
  },
};

export const Secondary: Story = {
  args: {
    label: '다음',
    intent: 'secondary',
  },
};

export const FullWidth: Story = {
  args: {
    label: '전체 너비 버튼',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    label: '비활성화',
    disabled: true,
  },
};
