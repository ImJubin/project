import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    value: 'This input is disabled',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Pre-filled value',
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <div className="w-96">
      <Input {...args} />
    </div>
  ),
  args: {
    placeholder: 'Full width input',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <Input type="email" placeholder="your@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <Input type="password" placeholder="Enter password" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Phone Number</label>
        <Input type="tel" placeholder="010-1234-5678" />
      </div>
    </div>
  ),
};
