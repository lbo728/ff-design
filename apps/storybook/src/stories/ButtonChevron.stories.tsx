import type { Meta } from "@storybook/react-vite";

import { ButtonChevron } from "@ff-design/react/components/buttonChevron";

const meta = {
  title: "ButtonChevron",
  component: ButtonChevron,
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
  },
} satisfies Meta<typeof ButtonChevron>;

export default meta;

export const AllDirections = () => {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <ButtonChevron direction="left" />
      <ButtonChevron direction="right" />
      <ButtonChevron direction="top" />
      <ButtonChevron direction="bottom" />
    </div>
  );
};
