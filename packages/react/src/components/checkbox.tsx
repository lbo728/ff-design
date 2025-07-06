"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@ff-design/react/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export interface CheckboxItemProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const CheckboxItem = React.forwardRef<HTMLDivElement, CheckboxItemProps>(
  ({ label, checked = false, onChange, className, ...props }, ref) => {
    const handleClick = () => {
      onChange?.(!checked);
    };

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2 cursor-pointer", className)}
        onClick={handleClick}
        {...props}
      >
        <div
          className={cn(
            "w-5 h-5 rounded border flex items-center justify-center transition-colors",
            checked
              ? "bg-black border-black"
              : "border-gray-400 hover:border-gray-600"
          )}
        >
          {checked && <CheckIcon className="w-3 h-3 text-white" />}
        </div>
        <span className="text-sm text-black select-none">{label}</span>
      </div>
    );
  }
);

CheckboxItem.displayName = "CheckboxItem";

export { Checkbox, CheckboxItem };
