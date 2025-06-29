"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@ff-design/react/lib/utils";

const inputVariants = cva(
  "flex w-full min-w-0 rounded-md border px-[12px] text-base selection:bg-gray-300 selection:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-black transition-all duration-200 md:text-sm",
  {
    variants: {
      variant: {
        default:
          "border-gray-300 focus-visible:ring-2 focus-visible:ring-black",
        error:
          "text-red-500 border-red-500 focus-visible:ring-2 focus-visible:ring-red-500",
        success:
          "border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500",
      },
      hasLabel: {
        true: "h-[52px] pt-[20px] pb-[8px]",
        false: "h-[52px] py-[8px]",
      },
    },
    defaultVariants: {
      variant: "default",
      hasLabel: false,
    },
  }
);

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  showPasswordToggle?: boolean;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant,
      showPasswordToggle = false,
      label,
      placeholder,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [inputType, setInputType] = React.useState(type);
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    React.useEffect(() => {
      if (type === "password" && showPasswordToggle) {
        setInputType(showPassword ? "text" : "password");
      } else {
        setInputType(type);
      }
    }, [type, showPassword, showPasswordToggle]);

    React.useEffect(() => {
      const initialValue = props.value || props.defaultValue;
      setHasValue(Boolean(initialValue));
    }, [props.value, props.defaultValue]);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(Boolean(e.target.value));
      props.onChange?.(e);
    };

    const showLabel = label && (isFocused || hasValue);
    const showPlaceholder = !showLabel && placeholder ? placeholder : undefined;

    if (type === "password" && showPasswordToggle) {
      return (
        <div className="relative">
          <input
            type={inputType}
            data-slot="input"
            className={cn(
              inputVariants({ variant, hasLabel: Boolean(showLabel) }),
              "pr-10",
              className
            )}
            ref={ref}
            placeholder={showPlaceholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          {showLabel && (
            <label className="absolute left-3 top-1 text-xs text-gray-500 pointer-events-none transition-all duration-200">
              {label}
            </label>
          )}
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-400 hover:text-gray-600"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "hide" : "show"}
          </button>
        </div>
      );
    }

    return (
      <div className="relative">
        <input
          type={inputType}
          data-slot="input"
          className={cn(
            inputVariants({ variant, hasLabel: Boolean(showLabel) }),
            className
          )}
          ref={ref}
          placeholder={showPlaceholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        {showLabel && (
          <label className="absolute left-3 top-1 text-xs text-gray-500 pointer-events-none transition-all duration-200">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface InputFieldProps extends Omit<InputProps, "label"> {
  label?: string;
  error?: string;
  success?: string;
  id?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, success, id, variant, className, ...props }, ref) => {
    const inputId = id || React.useId();

    const finalVariant = error ? "error" : success ? "success" : variant;

    return (
      <div className="flex gap-2 flow-row items-center">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        <Input
          id={inputId}
          ref={ref}
          variant={finalVariant}
          className={className}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && <p className="text-sm text-blue-500">{success}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export { Input, InputField };
