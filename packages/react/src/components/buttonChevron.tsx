import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@ff-design/react/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "lucide-react";

const buttonChevronVariants = cva(
  "flex items-center justify-center bg-black hover:bg-gray-100 rounded-[100px] cursor-pointer",
  {
    variants: {
      size: {
        sm: "w-[32px] h-[32px]",
        md: "w-[40px] h-[40px]",
        lg: "w-[48px] h-[48px]",
        xl: "w-[56px] h-[56px]",
      },
      disabled: {
        true: "cursor-not-allowed bg-gray-300",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

function ButtonChevron({
  className,
  size,
  disabled,
  direction = "right",
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonChevronVariants> & {
    direction?: "left" | "right" | "top" | "bottom";
  }) {
  return (
    <button
      data-slot="button-chevron"
      className={cn(buttonChevronVariants({ size, disabled }), className)}
      {...props}
    >
      {direction === "left" && (
        <ChevronLeftIcon className="size-[24px] text-white" />
      )}
      {direction === "right" && (
        <ChevronRightIcon className="size-[24px] text-white" />
      )}
      {direction === "top" && (
        <ChevronUpIcon className="size-[24px] text-white" />
      )}
      {direction === "bottom" && (
        <ChevronDownIcon className="size-[24px] text-white" />
      )}
    </button>
  );
}

export { ButtonChevron, buttonChevronVariants };
