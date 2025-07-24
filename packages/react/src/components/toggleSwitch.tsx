import * as React from "react";
import { cn } from "../lib/utils";

export interface ToggleSwitchProps {
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const ToggleSwitch = React.forwardRef<HTMLDivElement, ToggleSwitchProps>(
  (
    { options, value, onValueChange, className, disabled = false, ...props },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = React.useState<string>(
      value || options[0]?.value || ""
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    const handleOptionClick = (optionValue: string) => {
      if (disabled) return;

      setSelectedValue(optionValue);
      onValueChange?.(optionValue);
    };

    const selectedIndex = options.findIndex(
      (option) => option.value === selectedValue
    );

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full bg-gray-200 p-0.5",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "absolute left-0.5 top-0.5 bottom-0.5 bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out",
            "flex items-center justify-center"
          )}
          style={{
            width: `calc((100% - 4px) / ${options.length})`,
            transform: `translateX(${selectedIndex * 100}%)`,
          }}
        />

        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleOptionClick(option.value)}
            disabled={disabled}
            className={cn(
              "relative flex items-center justify-center gap-2 rounded-full px-6 py-2 text-sm font-normal transition-all duration-200 z-10",
              selectedValue === option.value
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900 cursor-pointer",
              disabled ?? "cursor-not-allowed"
            )}
            style={{ width: "144px" }}
          >
            <span className="text-base leading-[1.193] tracking-[-0.02em]">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    );
  }
);

ToggleSwitch.displayName = "ToggleSwitch";

export { ToggleSwitch };
