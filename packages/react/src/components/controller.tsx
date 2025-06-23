import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@ff-design/react/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "lucide-react";

const controllerVariants = cva(
  "flex items-center justify-center rounded-[100px] cursor-pointer",
  {
    variants: {
      variant: {
        fill: "bg-black hover:bg-gray-100 ",
        outline:
          "bg-white border border-gray-300 hover:border-black hover:bg-gray-300 hover:text-gray-500 text-black",
      },
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
      variant: "fill",
      size: "md",
      disabled: false,
    },
  }
);

const iconVariants = cva("stroke-[1.5px]", {
  variants: {
    variant: {
      fill: "text-white",
      outline: "text-black",
    },
    size: {
      sm: "size-[16px]",
      md: "size-[24px]",
      lg: "size-[32px]",
      xl: "size-[40px]",
    },
  },
  defaultVariants: {
    variant: "fill",
    size: "md",
  },
});

function Controller({
  className,
  variant = "fill",
  size = "md",
  disabled = false,
  direction = "right",
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof controllerVariants> & {
    direction?: "left" | "right" | "top" | "bottom";
  }) {
  return (
    <button
      data-slot="button-chevron"
      className={cn(controllerVariants({ size, disabled, variant }), className)}
      {...props}
    >
      {direction === "left" && (
        <ChevronLeftIcon className={iconVariants({ size, variant })} />
      )}
      {direction === "right" && (
        <ChevronRightIcon className={iconVariants({ size, variant })} />
      )}
      {direction === "top" && (
        <ChevronUpIcon className={iconVariants({ size, variant })} />
      )}
      {direction === "bottom" && (
        <ChevronDownIcon className={iconVariants({ size, variant })} />
      )}
    </button>
  );
}

export { Controller, controllerVariants };
