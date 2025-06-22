import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "@ff-design/react/components/checkbox";

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};

export const Checked = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="grid h-fit gap-4">
        <p>default (false)</p>
        <Checkbox />
      </div>
      <div className="grid h-fit gap-4">
        <p>checked</p>
        <Checkbox checked />
      </div>
      <div className="grid h-fit gap-4">
        <p>indeterminate</p>
        <Checkbox checked="indeterminate" />
      </div>
    </div>
  );
};
