import * as React from "react";

import { cn } from "@ff-design/react/lib/utils";

interface PaginationDotProps extends React.ComponentProps<"div"> {
  isActive?: boolean;
}

function PaginationDot({ className, isActive, ...props }: PaginationDotProps) {
  return (
    <div
      className={cn(
        "w-[6px] h-[6px] rounded-full bg-gray-300 cursor-pointer transition-colors",
        isActive && "bg-white cursor-default",
        className
      )}
      {...props}
    />
  );
}

interface PaginationDotsProps extends React.ComponentProps<"div"> {
  totalCount?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

function Pagination({
  className,
  totalCount = 5,
  currentPage = 1,
  onPageChange,
  ...props
}: PaginationDotsProps) {
  const handleDotClick = (page: number) => {
    if (page !== currentPage && onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className={cn("flex gap-1", className)} {...props}>
      {Array.from({ length: totalCount }, (_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <PaginationDot
            key={page}
            isActive={isActive}
            onClick={() => handleDotClick(page)}
          />
        );
      })}
    </div>
  );
}

export { PaginationDot, Pagination };
