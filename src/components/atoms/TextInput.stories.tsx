import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { useState } from 'react';

const meta = {
  title: 'Atoms/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    invalid: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: '300px' }}>
        <TextInput
          value={value}
          onValueChange={setValue}
          placeholder="텍스트를 입력하세요"
        />
      </div>
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('초기값이 있는 입력');
    return (
      <div style={{ width: '300px' }}>
        <TextInput
          value={value}
          onValueChange={setValue}
          placeholder="텍스트를 입력하세요"
        />
      </div>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    const [value, setValue] = useState('잘못된 입력');
    return (
      <div style={{ width: '300px' }}>
        <TextInput
          value={value}
          onValueChange={setValue}
          invalid={true}
          placeholder="텍스트를 입력하세요"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('비활성화된 입력');
    return (
      <div style={{ width: '300px' }}>
        <TextInput
          value={value}
          onValueChange={setValue}
          disabled={true}
        />
      </div>
    );
  },
};

export const WithTypeEmail: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: '300px' }}>
        <TextInput
          value={value}
          onValueChange={setValue}
          type="email"
          placeholder="email@example.com"
        />
      </div>
    );
  },
};
