import type { Meta } from "@storybook/react-vite";

import { Input, InputField } from "@ff-design/react/components/input";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error", "success"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    showPasswordToggle: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const AllVariants = () => {
  return (
    <div className="grid grid-cols-1 gap-8 w-[400px]">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">기본</p>
          <Input type="text" placeholder="Label" label="Label" />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">값이 있는 상태</p>
          <Input
            type="text"
            placeholder="Label"
            label="Label"
            defaultValue="Value"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">에러 상태</p>
          <Input
            type="text"
            placeholder="Label"
            label="Label"
            variant="error"
            defaultValue="Value"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">패스워드</p>
          <Input
            type="password"
            placeholder="비밀번호"
            label="Label"
            showPasswordToggle
            defaultValue="password123"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">패스워드)</p>
          <Input
            type="password"
            placeholder="비밀번호"
            label="Label"
            defaultValue="password123"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">비활성화</p>
          <Input type="text" placeholder="Label" label="Label" disabled />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">수평 배치</p>
          <InputField type="text" placeholder="Label" label="Label" />
        </div>
      </div>
    </div>
  );
};
