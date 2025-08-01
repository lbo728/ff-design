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
        "flex items-center gap-0.5 px-8 py-2 w-60 h-10 bg-gray-100 rounded-full",
        className
      )}
    >
      <div className="flex justify-center items-center w-8 h-8">
        <SearchIcon className="w-5 h-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        className={cn(
          "flex-1 bg-transparent text-gray-500 placeholder-gray-500 outline-none border-none",
          fontSizeClass
        )}
      />
    </div>
  );
}
