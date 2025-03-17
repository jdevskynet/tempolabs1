"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div
      className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.isNew && (
        <Badge className="absolute top-2 left-2 z-10 bg-blue-500 hover:bg-blue-600">
          New
        </Badge>
      )}
      {discount > 0 && (
        <Badge className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600">
          {discount}% OFF
        </Badge>
      )}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
          {product.category}
        </div>
        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = ({
  title = "Featured Products",
  subtitle = "Check out our latest tech products and exclusive deals",
  products = [
    {
      id: "1",
      name: "Latest Smartphone Pro Max",
      price: 999.99,
      originalPrice: 1299.99,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
      category: "Smartphones",
      isFeatured: true,
      isNew: true,
    },
    {
      id: "2",
      name: 'Ultra HD Smart TV 65"',
      price: 799.99,
      originalPrice: 999.99,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
      category: "TVs & Displays",
      isFeatured: true,
    },
    {
      id: "3",
      name: "Noise Cancelling Wireless Headphones",
      price: 249.99,
      originalPrice: 349.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
      category: "Audio",
      isFeatured: true,
    },
    {
      id: "4",
      name: "Professional Gaming Laptop",
      price: 1499.99,
      originalPrice: 1799.99,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80",
      category: "Laptops",
      isFeatured: true,
      isNew: true,
    },
    {
      id: "5",
      name: "Smart Home Security System",
      price: 299.99,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1558002038-bb0237f4b4af?w=500&q=80",
      category: "Smart Home",
      isFeatured: true,
    },
    {
      id: "6",
      name: "Fitness Smartwatch Pro",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
      category: "Wearables",
      isFeatured: true,
    },
  ],
}: FeaturedProductsProps) => {
  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-1"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="rounded-full px-6">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
