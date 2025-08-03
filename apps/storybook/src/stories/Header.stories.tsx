import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "@ff-design/react/components/header";
import logoFlux from "/img/logo-flux.svg";

const meta = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "추가 CSS 클래스",
    },
    logo: {
      control: "text",
      description: "로고 이미지 경로",
    },
    navigationItems: {
      control: "object",
      description: "네비게이션 메뉴 아이템들",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: logoFlux,
  },
};

export const WithoutLogo: Story = {
  args: {},
};

export const CustomClassName: Story = {
  args: {
    logo: logoFlux,
    className: "border border-gray-200",
  },
};

export const CustomNavigation: Story = {
  args: {
    logo: logoFlux,
    navigationItems: [
      {
        label: "홈",
        items: [
          {
            title: "메인 페이지",
            href: "/",
            description: "사이트의 메인 페이지로 이동합니다.",
          },
        ],
      },
      {
        label: "제품",
        items: [
          {
            title: "신상품",
            href: "/products/new",
            description: "최신 제품들을 확인하세요.",
          },
          {
            title: "인기 제품",
            href: "/products/popular",
            description: "가장 인기 있는 제품들을 확인하세요.",
          },
        ],
      },
      {
        label: "고객지원",
        items: [
          {
            title: "FAQ",
            href: "/support/faq",
            description: "자주 묻는 질문들을 확인하세요.",
          },
          {
            title: "문의하기",
            href: "/support/contact",
            description: "고객지원팀에 문의하세요.",
          },
        ],
      },
    ],
  },
};
