import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Minus, Plus } from "lucide-react";

import { cn } from "@ff-design/react/lib/utils";
import { Button } from "./button";

const countVariants = cva(
  "inline-flex items-center justify-center rounded-[2px] overflow-hidden bg-background text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-white",
        filled: "border-transparent bg-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CountProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof countVariants> {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
  disabled?: boolean;
  showLabel?: boolean;
  label?: string;
}

const Count = React.forwardRef<HTMLDivElement, CountProps>(
  (
    {
      className,
      variant,
      value,
      min = 0,
      max,
      step = 1,
      onValueChange,
      disabled = false,
      showLabel = false,
      label = "수량",
      ...props
    },
    ref
  ) => {
    const handleIncrement = () => {
      if (disabled) return;
      const newValue = value + step;
      if (max !== undefined && newValue > max) return;
      onValueChange?.(newValue);
    };

    const handleDecrement = () => {
      if (disabled) return;
      const newValue = value - step;
      if (newValue < min) return;
      onValueChange?.(newValue);
    };

    const isMinDisabled = value <= min || disabled;
    const isMaxDisabled = (max !== undefined && value >= max) || disabled;

    return (
      <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
        {showLabel && <label className="text-sm font-medium text-gray-700">{label}</label>}
        <div className={cn(countVariants({ variant }))}>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleIncrement}
            disabled={isMaxDisabled}
            className="h-[40px] w-[40px] rounded-[0px] border-gray-300  hover:bg-black border-r-0 text-gray-500"
            aria-label="증가"
          >
            <Plus className="h-3 w-3" />
          </Button>
          <span className="w-[40px] h-[40px] flex items-center justify-center text-center font-bold border border-gray-300 text-gray-500 select-none">
            {value}
          </span>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecrement}
            disabled={isMinDisabled}
            className="h-[40px] w-[40px] rounded-[0px] border-gray-300  hover:bg-black border-l-0 text-gray-500"
            aria-label="감소"
          >
            <Minus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    );
  }
);

Count.displayName = "Count";

export { Count, countVariants };
