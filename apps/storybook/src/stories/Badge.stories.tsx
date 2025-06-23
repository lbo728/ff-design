import type { Meta } from "@storybook/react-vite";

import { Badge } from "@ff-design/react/components/badge";

const meta = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

export const Default = () => {
  return (
    <>
      <Badge>Badge</Badge>
    </>
  );
};
