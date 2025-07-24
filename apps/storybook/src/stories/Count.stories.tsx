import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Count } from "@ff-design/react/components/count";

const meta: Meta<typeof Count> = {
  title: "Count",
  component: Count,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "filled"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    showLabel: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1,
    min: 0,
    max: 10,
    step: 1,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Count {...args} value={value} onValueChange={setValue} />;
  },
};

export const WithLabel: Story = {
  args: {
    value: 1,
    min: 0,
    max: 10,
    step: 1,
    showLabel: true,
    label: "수량",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Count {...args} value={value} onValueChange={setValue} />;
  },
};

export const Disabled: Story = {
  args: {
    value: 5,
    min: 0,
    max: 10,
    step: 1,
    disabled: true,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Count {...args} value={value} onValueChange={setValue} />;
  },
};

export const Filled: Story = {
  args: {
    value: 1,
    min: 0,
    max: 10,
    step: 1,
    variant: "filled",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Count {...args} value={value} onValueChange={setValue} />;
  },
};
