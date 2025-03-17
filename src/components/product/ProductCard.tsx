import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  originalPrice?: number;
  image?: string;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  isSale?: boolean;
  isOutOfStock?: boolean;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  className?: string;
}

const ProductCard = ({
  id = "1",
  name = "Wireless Noise-Cancelling Headphones",
  price = 249.99,
  originalPrice = 299.99,
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  rating = 4.5,
  reviewCount = 128,
  isNew = false,
  isSale = true,
  isOutOfStock = false,
  onAddToCart = () => {},
  onAddToWishlist = () => {},
  className,
}: ProductCardProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card
      className={cn(
        "w-full max-w-[300px] overflow-hidden transition-all duration-200 hover:shadow-md bg-white",
        className,
      )}
    >
      <div className="relative">
        {/* Product image */}
        <div className="relative h-[200px] w-full overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 300px) 100vw, 300px"
          />
        </div>

        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-blue-500 text-white hover:bg-blue-600">
              New
            </Badge>
          )}
          {isSale && discount > 0 && (
            <Badge className="bg-red-500 text-white hover:bg-red-600">
              {discount}% OFF
            </Badge>
          )}
          {isOutOfStock && (
            <Badge
              variant="outline"
              className="bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
          onClick={onAddToWishlist}
        >
          <Heart className="h-4 w-4 text-gray-600" />
        </Button>
      </div>

      <CardHeader className="p-4 pb-0">
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
          {name}
        </h3>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3 w-3",
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : i === Math.floor(rating) && rating % 1 > 0
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200",
              )}
            />
          ))}
          <span className="ml-1 text-xs text-gray-500">
            {reviewCount} reviews
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          disabled={isOutOfStock}
          onClick={onAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
