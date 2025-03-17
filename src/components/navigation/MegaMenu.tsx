"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Laptop,
  Smartphone,
  Headphones,
  Camera,
  Watch,
  Tv,
  Gamepad,
  ChevronRight,
  Sparkles,
  Zap,
  Tag,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface MegaMenuProps {
  className?: string;
}

interface CategoryProps {
  title: string;
  icon: React.ReactNode;
  subcategories: {
    name: string;
    href: string;
    isNew?: boolean;
    isPopular?: boolean;
  }[];
  featured?: {
    name: string;
    description: string;
    href: string;
    imageSrc: string;
    discount?: string;
  }[];
}

const categories: CategoryProps[] = [
  {
    title: "Computers & Laptops",
    icon: <Laptop className="h-5 w-5" />,
    subcategories: [
      { name: "Laptops", href: "/category/laptops", isNew: true },
      { name: "Desktop PCs", href: "/category/desktops" },
      {
        name: "Computer Accessories",
        href: "/category/computer-accessories",
        isPopular: true,
      },
      { name: "Monitors", href: "/category/monitors" },
      { name: "Networking", href: "/category/networking" },
    ],
    featured: [
      {
        name: "New Arrivals",
        description:
          "Check out the latest laptops with cutting-edge technology",
        href: "/category/laptops/new-arrivals",
        imageSrc:
          "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&q=80",
        discount: "Up to 15% off",
      },
      {
        name: "Best Sellers",
        description: "Our most popular computing products",
        href: "/category/computers/best-sellers",
        imageSrc:
          "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=300&q=80",
      },
    ],
  },
  {
    title: "Smartphones & Tablets",
    icon: <Smartphone className="h-5 w-5" />,
    subcategories: [
      { name: "Smartphones", href: "/category/smartphones", isPopular: true },
      { name: "Tablets", href: "/category/tablets" },
      { name: "Phone Cases", href: "/category/phone-cases" },
      { name: "Chargers & Cables", href: "/category/chargers", isNew: true },
      { name: "Screen Protectors", href: "/category/screen-protectors" },
    ],
    featured: [
      {
        name: "Latest Models",
        description: "Discover the newest smartphone releases",
        href: "/category/smartphones/new-releases",
        imageSrc:
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&q=80",
        discount: "Save $100",
      },
    ],
  },
  {
    title: "Audio & Headphones",
    icon: <Headphones className="h-5 w-5" />,
    subcategories: [
      { name: "Headphones", href: "/category/headphones", isPopular: true },
      { name: "Earbuds", href: "/category/earbuds", isNew: true },
      { name: "Speakers", href: "/category/speakers" },
      { name: "Soundbars", href: "/category/soundbars" },
      { name: "Microphones", href: "/category/microphones" },
    ],
  },
  {
    title: "Cameras & Photography",
    icon: <Camera className="h-5 w-5" />,
    subcategories: [
      { name: "Digital Cameras", href: "/category/digital-cameras" },
      { name: "Camera Lenses", href: "/category/camera-lenses" },
      { name: "Drones", href: "/category/drones", isNew: true },
      { name: "Action Cameras", href: "/category/action-cameras" },
      { name: "Camera Accessories", href: "/category/camera-accessories" },
    ],
  },
  {
    title: "Wearable Technology",
    icon: <Watch className="h-5 w-5" />,
    subcategories: [
      { name: "Smartwatches", href: "/category/smartwatches", isPopular: true },
      { name: "Fitness Trackers", href: "/category/fitness-trackers" },
      { name: "VR Headsets", href: "/category/vr-headsets", isNew: true },
      { name: "Smart Glasses", href: "/category/smart-glasses" },
    ],
  },
  {
    title: "TVs & Home Entertainment",
    icon: <Tv className="h-5 w-5" />,
    subcategories: [
      { name: "Smart TVs", href: "/category/smart-tvs" },
      { name: "Streaming Devices", href: "/category/streaming-devices" },
      { name: "Projectors", href: "/category/projectors", isNew: true },
      { name: "Blu-ray & DVD Players", href: "/category/blu-ray-players" },
    ],
  },
  {
    title: "Gaming",
    icon: <Gamepad className="h-5 w-5" />,
    subcategories: [
      {
        name: "Gaming Consoles",
        href: "/category/gaming-consoles",
        isPopular: true,
      },
      { name: "Video Games", href: "/category/video-games" },
      { name: "Gaming Accessories", href: "/category/gaming-accessories" },
      { name: "Gaming Laptops", href: "/category/gaming-laptops", isNew: true },
      { name: "Gaming Chairs", href: "/category/gaming-chairs" },
    ],
    featured: [
      {
        name: "Latest Releases",
        description: "Check out the newest games and consoles",
        href: "/category/gaming/new-releases",
        imageSrc:
          "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=300&q=80",
        discount: "20% off",
      },
    ],
  },
];

const MegaMenu = ({ className = "" }: MegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className={cn("w-full glass-nav", className)}>
      <NavigationMenu className="mx-auto max-w-screen-2xl">
        <NavigationMenuList className="flex-wrap justify-center gap-1">
          {categories.map((category) => (
            <NavigationMenuItem key={category.title}>
              <NavigationMenuTrigger
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${activeCategory === category.title ? "bg-primary/20 text-primary" : "hover:bg-white/10"}`}
                onMouseEnter={() => setActiveCategory(category.title)}
                onClick={() =>
                  setActiveCategory(
                    category.title === activeCategory ? null : category.title,
                  )
                }
              >
                <span className="bg-primary/10 p-1.5 rounded-full">
                  {category.icon}
                </span>
                <span>{category.title}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="glass-dropdown mt-2 rounded-xl overflow-hidden">
                <div className="grid w-[800px] grid-cols-5 p-6 gap-4">
                  <div className="col-span-2 border-r border-white/10 pr-6">
                    <div className="mb-4 flex items-center">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-medium bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory.name}>
                          <Link
                            href={subcategory.href}
                            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-200 p-2 rounded-lg hover:bg-white/10 group"
                          >
                            <span className="flex items-center">
                              {subcategory.name}
                              {subcategory.isNew && (
                                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/20 text-blue-500">
                                  <Sparkles className="h-3 w-3 mr-0.5" />
                                  NEW
                                </span>
                              )}
                              {subcategory.isPopular && (
                                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/20 text-amber-500">
                                  <Zap className="h-3 w-3 mr-0.5" />
                                  POPULAR
                                </span>
                              )}
                            </span>
                            <ChevronRight className="ml-auto h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all duration-200 transform group-hover:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href={`/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                      >
                        View all {category.title}
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>

                  {category.featured ? (
                    <div className="col-span-3 pl-6">
                      <h4 className="mb-4 text-sm font-medium text-muted-foreground flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-primary" />
                        Featured Products
                      </h4>
                      <div className="grid grid-cols-2 gap-6">
                        {category.featured.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group block space-y-3 glass-card p-3 hover:shadow-xl transition-all duration-300"
                          >
                            <div className="overflow-hidden rounded-lg relative">
                              <img
                                src={item.imageSrc}
                                alt={item.name}
                                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              {item.discount && (
                                <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground text-xs font-medium py-1 px-2 rounded-full flex items-center">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {item.discount}
                                </div>
                              )}
                            </div>
                            <div>
                              <h5 className="font-medium group-hover:text-primary transition-colors text-base">
                                {item.name}
                              </h5>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="col-span-3 flex items-center justify-center pl-6">
                      <div className="text-center glass-card p-6 w-full">
                        <h4 className="text-xl font-medium bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                          Explore {category.title}
                        </h4>
                        <p className="mt-3 text-sm text-muted-foreground">
                          Discover our full range of{" "}
                          {category.title.toLowerCase()} products
                        </p>
                        <Link
                          href={`/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="mt-4 inline-flex items-center rounded-full glass-button px-6 py-2.5 text-sm font-medium text-primary-foreground hover:shadow-lg group"
                        >
                          Shop Now
                          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MegaMenu;
