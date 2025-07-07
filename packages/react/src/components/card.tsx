import React from "react";
import { cn } from "../lib/utils";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";

export interface CardProps {
  size?: "sm" | "md";
  isSkeleton?: boolean;
  isFirst?: boolean;
  brand?: string;
  title?: string;
  salePercent?: number;
  price?: number;
  unit?: string;
  likeCount?: number;
  rating?: number;
  reviewCount?: number;
  badges?: string[];
  imageUrl?: string;
  isLiked?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPrevious?: () => void;
  onNext?: () => void;
  onLike?: () => void;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      size = "md",
      isSkeleton = false,
      isFirst = false,
      brand = "브랜드",
      title = "상품 타이틀",
      salePercent = 10,
      price = 24000,
      unit = "원",
      likeCount = 2408,
      rating = 4.8,
      reviewCount = 1234,
      badges = ["무료배송", "쿠폰"],
      imageUrl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      isLiked = false,
      currentPage = 1,
      totalPages = 5,
      onPrevious,
      onNext,
      onLike,
      className,
      ...props
    },
    ref
  ) => {
    const cardWidth = size === "md" ? 388 : 216;
    const imageHeight = size === "md" ? 353 : 216;
    const controlSize = size === "md" ? 32 : 24;
    const iconSize = size === "md" ? 24 : 18;

    if (isSkeleton) {
      return (
        <div
          ref={ref}
          className={cn("flex flex-col gap-6", className)}
          style={{ width: cardWidth }}
          {...props}
        >
          <div
            className="bg-gray-200 rounded"
            style={{ height: imageHeight }}
          />

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="h-3 bg-gray-200 rounded w-16" />
              <div className="h-3 bg-gray-200 rounded w-24" />
            </div>

            <div className="flex gap-1">
              <div className="h-4 bg-gray-200 rounded w-8" />
              <div className="h-4 bg-gray-200 rounded w-16" />
            </div>

            <div className="flex gap-2">
              <div className="h-3 bg-gray-200 rounded w-12" />
              <div className="h-3 bg-gray-200 rounded w-16" />
            </div>

            <div className="flex gap-1">
              <div className="h-5 bg-gray-200 rounded w-12" />
              <div className="h-5 bg-gray-200 rounded w-8" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-6", className)}
        style={{ width: cardWidth }}
        {...props}
      >
        <div
          className="relative rounded overflow-hidden"
          style={{ height: imageHeight }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  index + 1 === currentPage ? "bg-white" : "bg-gray-400"
                )}
              />
            ))}
          </div>

          <button
            onClick={onLike}
            className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center"
          >
            <Heart
              className={cn(
                "w-5 h-5 stroke-white stroke-1.5",
                isLiked ? "fill-red-500 stroke-red-500" : "fill-black/30"
              )}
            />
          </button>

          <div className="absolute inset-x-4 top-1/2 transform -translate-y-1/2 flex justify-between pointer-events-none">
            {(!isFirst || currentPage > 1) && (
              <button
                onClick={onPrevious}
                className={cn(
                  "bg-white border border-gray-400 rounded-full flex items-center justify-center shadow-lg pointer-events-auto",
                  "hover:bg-gray-50 transition-colors"
                )}
                style={{ width: controlSize, height: controlSize }}
              >
                <ChevronLeft className="w-4 h-4 text-gray-900" />
              </button>
            )}

            <div className="flex-1" />

            {currentPage < totalPages && (
              <button
                onClick={onNext}
                className={cn(
                  "bg-white border border-gray-400 rounded-full flex items-center justify-center shadow-lg pointer-events-auto",
                  "hover:bg-gray-50 transition-colors"
                )}
                style={{ width: controlSize, height: controlSize }}
              >
                <ChevronRight className="w-4 h-4 text-gray-900" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="text-xs text-gray-900 font-normal">{brand}</div>
            <div className="text-xs text-gray-900 font-bold">{title}</div>
          </div>

          <div className="flex gap-1 items-center">
            <div className="text-sm font-bold text-red-500">{salePercent}%</div>
            <div className="flex items-center">
              <span className="text-sm font-bold text-gray-900">
                {price.toLocaleString()}
              </span>
              <span className="text-sm font-bold text-gray-900">{unit}</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 flex items-center justify-center">
                <Heart className="w-2.5 h-2.5 fill-gray-400 text-gray-400" />
              </div>
              <span className="text-xs text-gray-500">
                {likeCount.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <div className="w-3 h-3 flex items-center justify-center">
                <Star className="w-2.5 h-2.5 fill-gray-500 text-gray-500" />
              </div>
              <span className="text-xs text-gray-500">{rating}</span>
              <span className="text-xs text-gray-500">
                ({reviewCount.toLocaleString()})
              </span>
            </div>
          </div>

          <div className="flex gap-1">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
