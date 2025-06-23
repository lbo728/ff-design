import type { Meta, StoryObj } from "@storybook/react-vite";

import { Controller } from "@ff-design/react/components/controller";

const meta = {
  title: "Controller",
  component: Controller,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    direction: {
      control: { type: "select" },
      options: ["left", "right", "top", "bottom"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    variant: {
      control: { type: "select" },
      options: ["fill", "outline"],
    },
  },
} satisfies Meta<typeof Controller>;

export default meta;

export const Default: StoryObj = {
  args: {
    variant: "fill",
    size: "md",
    disabled: false,
    direction: "right",
  },
};

export const AllDirections = () => {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <Controller direction="left" />
      <Controller direction="right" />
      <Controller direction="top" />
      <Controller direction="bottom" />
    </div>
  );
};
