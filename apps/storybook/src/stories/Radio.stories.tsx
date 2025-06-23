import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioGroup, RadioGroupItem } from "@ff-design/react/components/radio";
import { Label } from "@ff-design/react/components/label";

const meta = {
  title: "Radio",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    defaultValue: "option-one",
  },
  argTypes: {
    defaultValue: {
      control: { type: "radio" },
      options: ["option-one", "option-two", "option-three", "none"],
      description: "선택된 라디오 버튼 값",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};
