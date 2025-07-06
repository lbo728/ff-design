import * as React from "react";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "../lib/utils";

export interface FilterTagProps {
  isSelected?: boolean;
  hasCheck?: boolean;
  onClick?: () => void;
  className?: string;
  label?: string;
}

const FilterTag = React.forwardRef<HTMLDivElement, FilterTagProps>(
  (
    {
      isSelected = false,
      hasCheck = false,
      onClick,
      className,
      label,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full border text-sm cursor-pointer transition-colors",
          isSelected
            ? "bg-white border-black text-black"
            : "bg-white border-gray-300 text-gray-500 hover:border-gray-400",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {hasCheck && isSelected && <Check className="w-3 h-3" />}
        {label}
      </div>
    );
  }
);

FilterTag.displayName = "FilterTag";

export interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

const FilterSection = React.forwardRef<HTMLDivElement, FilterSectionProps>(
  ({ title, children, defaultExpanded = true, className, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-lg font-bold text-black">{title}</h3>
          <ChevronDown
            className={cn(
              "w-6 h-6 transition-transform",
              isExpanded ? "rotate-180" : ""
            )}
          />
        </div>
        {isExpanded && <div className="flex flex-col gap-6">{children}</div>}
      </div>
    );
  }
);

FilterSection.displayName = "FilterSection";

export { FilterTag, FilterSection };
