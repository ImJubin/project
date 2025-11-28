import type { Meta, StoryObj } from '@storybook/react';
import DolfinLoader from './DolfinLoader';

const meta = {
  title: 'Molecules/DolfinLoader',
  component: DolfinLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DolfinLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DolfinLoader />,
};

export const WithBackground: Story = {
  render: () => (
    <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center rounded-lg">
      <DolfinLoader />
    </div>
  ),
};

export const InContainer: Story = {
  render: () => (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center">
      <DolfinLoader />
    </div>
  ),
};
