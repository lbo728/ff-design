import type { Meta } from "@storybook/react-vite";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@ff-design/react/components/select";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

export const SelectWithLabel = () => {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="카드사를 선택해주세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="KB">KB국민카드</SelectItem>
          <SelectItem value="신한">신한카드</SelectItem>
          <SelectItem value="삼성">삼성카드</SelectItem>
          <SelectItem value="현대">현대카드</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
