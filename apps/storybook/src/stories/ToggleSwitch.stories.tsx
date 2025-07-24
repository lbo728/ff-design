import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleSwitch } from "@ff-design/react/components/toggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
      description: "토글 스위치의 옵션들",
    },
    value: {
      control: "text",
      description: "현재 선택된 값",
    },
    onValueChange: {
      action: "value changed",
      description: "값이 변경될 때 호출되는 콜백",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "Basic Info", value: "basic" },
      { label: "Custom Info", value: "custom" },
    ],
    value: "basic",
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { label: "Basic Info", value: "basic" },
      { label: "Custom Info", value: "custom" },
    ],
    value: "basic",
    disabled: true,
  },
};

export const ThreeOptions: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    value: "option2",
  },
};
