import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@ff-design/react/components/card";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    isSkeleton: {
      control: { type: "boolean" },
    },
    isFirst: {
      control: { type: "boolean" },
    },
    isLiked: {
      control: { type: "boolean" },
    },
    currentPage: {
      control: { type: "number", min: 1, max: 5 },
    },
    totalPages: {
      control: { type: "number", min: 1, max: 10 },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    brand: "브랜드",
    title: "상품 타이틀",
    salePercent: 10,
    price: 24000,
    unit: "원",
    likeCount: 2408,
    rating: 4.8,
    reviewCount: 1234,
    badges: ["무료배송", "쿠폰"],
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    isLiked: false,
    currentPage: 3,
    totalPages: 5,
  },
};

export const FirstCard = () => {
  return (
    <Card
      size="md"
      brand="브랜드"
      title="상품 타이틀"
      salePercent={10}
      price={24000}
      unit="원"
      likeCount={2408}
      rating={4.8}
      reviewCount={1234}
      badges={["무료배송", "쿠폰"]}
      imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
      isLiked={false}
      isFirst={true}
      currentPage={1}
      totalPages={5}
    />
  );
};

export const SmallCard = () => {
  return (
    <Card
      size="sm"
      brand="브랜드"
      title="상품 타이틀"
      salePercent={10}
      price={24000}
      unit="원"
      likeCount={2408}
      rating={4.8}
      reviewCount={1234}
      badges={["무료배송", "쿠폰"]}
      imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
      isLiked={false}
      currentPage={3}
      totalPages={5}
    />
  );
};

export const SkeletonMedium = () => {
  return <Card size="md" isSkeleton={true} />;
};

export const SkeletonSmall = () => {
  return <Card size="sm" isSkeleton={true} />;
};

export const LikedCard = () => {
  return (
    <Card
      size="md"
      brand="브랜드"
      title="상품 타이틀"
      salePercent={10}
      price={24000}
      unit="원"
      likeCount={2408}
      rating={4.8}
      reviewCount={1234}
      badges={["무료배송", "쿠폰"]}
      imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
      isLiked={true}
      currentPage={3}
      totalPages={5}
    />
  );
};
