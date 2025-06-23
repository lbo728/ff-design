import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Pagination } from "@ff-design/react/components/pagination";

const meta = {
  title: "Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    totalCount: {
      control: { type: "number", min: 1, max: 20 },
      description: "총 페이지 수",
    },
    currentPage: {
      control: { type: "number", min: 1 },
      description: "현재 활성화된 페이지",
    },
    onPageChange: {
      action: "pageChanged",
      description: "페이지 변경 시 호출되는 함수",
    },
  },
  args: {
    totalCount: 5,
    currentPage: 1,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalCount: 5,
    currentPage: 1,
  },
};

export const Interactive = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalCount = 8;

  return (
    <div className="flex flex-col items-center gap-4">
      <Pagination totalCount={totalCount} currentPage={currentPage} onPageChange={setCurrentPage} />
      <p className="text-sm text-gray-600">
        현재 페이지: {currentPage} / {totalCount}
      </p>
    </div>
  );
};
