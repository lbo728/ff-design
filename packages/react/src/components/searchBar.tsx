import { SearchIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (value: string) => void;
  fontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
}

export function SearchBar({
  placeholder = "Search",
  className,
  onSearch,
  fontSize = "base",
}: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const fontSizeClass = `text-${fontSize}`;

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 md:px-4 md:py-2 lg:px-8 lg:py-2 sm:w-6 md:w-48 lg:w-60 h-8 md:h-9 lg:h-10 md:bg-gray-100 lg:bg-gray-100 md:rounded-full lg:rounded-full",
        className
      )}
    >
      <div className="flex justify-center items-center w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        <SearchIcon className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        className={cn(
          "flex-1 bg-transparent text-gray-500 placeholder-gray-500 outline-none border-none text-sm md:text-base lg:text-lg hidden md:block",
          fontSizeClass
        )}
      />
    </div>
  );
}
