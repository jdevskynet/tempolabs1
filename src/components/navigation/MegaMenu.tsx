import React from "react";
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
  subcategories: { name: string; href: string }[];
  featured?: {
    name: string;
    description: string;
    href: string;
    imageSrc: string;
  }[];
}

const categories: CategoryProps[] = [
  {
    title: "Computers & Laptops",
    icon: <Laptop className="h-5 w-5" />,
    subcategories: [
      { name: "Laptops", href: "/category/laptops" },
      { name: "Desktop PCs", href: "/category/desktops" },
      { name: "Computer Accessories", href: "/category/computer-accessories" },
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
      { name: "Smartphones", href: "/category/smartphones" },
      { name: "Tablets", href: "/category/tablets" },
      { name: "Phone Cases", href: "/category/phone-cases" },
      { name: "Chargers & Cables", href: "/category/chargers" },
      { name: "Screen Protectors", href: "/category/screen-protectors" },
    ],
    featured: [
      {
        name: "Latest Models",
        description: "Discover the newest smartphone releases",
        href: "/category/smartphones/new-releases",
        imageSrc:
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&q=80",
      },
    ],
  },
  {
    title: "Audio & Headphones",
    icon: <Headphones className="h-5 w-5" />,
    subcategories: [
      { name: "Headphones", href: "/category/headphones" },
      { name: "Earbuds", href: "/category/earbuds" },
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
      { name: "Drones", href: "/category/drones" },
      { name: "Action Cameras", href: "/category/action-cameras" },
      { name: "Camera Accessories", href: "/category/camera-accessories" },
    ],
  },
  {
    title: "Wearable Technology",
    icon: <Watch className="h-5 w-5" />,
    subcategories: [
      { name: "Smartwatches", href: "/category/smartwatches" },
      { name: "Fitness Trackers", href: "/category/fitness-trackers" },
      { name: "VR Headsets", href: "/category/vr-headsets" },
      { name: "Smart Glasses", href: "/category/smart-glasses" },
    ],
  },
  {
    title: "TVs & Home Entertainment",
    icon: <Tv className="h-5 w-5" />,
    subcategories: [
      { name: "Smart TVs", href: "/category/smart-tvs" },
      { name: "Streaming Devices", href: "/category/streaming-devices" },
      { name: "Projectors", href: "/category/projectors" },
      { name: "Blu-ray & DVD Players", href: "/category/blu-ray-players" },
    ],
  },
  {
    title: "Gaming",
    icon: <Gamepad className="h-5 w-5" />,
    subcategories: [
      { name: "Gaming Consoles", href: "/category/gaming-consoles" },
      { name: "Video Games", href: "/category/video-games" },
      { name: "Gaming Accessories", href: "/category/gaming-accessories" },
      { name: "Gaming Laptops", href: "/category/gaming-laptops" },
      { name: "Gaming Chairs", href: "/category/gaming-chairs" },
    ],
    featured: [
      {
        name: "Latest Releases",
        description: "Check out the newest games and consoles",
        href: "/category/gaming/new-releases",
        imageSrc:
          "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=300&q=80",
      },
    ],
  },
];

const MegaMenu = ({ className = "" }: MegaMenuProps) => {
  return (
    <div className={cn("bg-background w-full", className)}>
      <NavigationMenu className="mx-auto max-w-screen-2xl">
        <NavigationMenuList className="flex-wrap justify-start">
          {categories.map((category) => (
            <NavigationMenuItem key={category.title}>
              <NavigationMenuTrigger className="flex items-center gap-1.5">
                {category.icon}
                <span>{category.title}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-background">
                <div className="grid w-[800px] grid-cols-5 p-6">
                  <div className="col-span-2 border-r pr-6">
                    <div className="mb-3 flex items-center">
                      {category.icon}
                      <h3 className="ml-2 text-lg font-medium">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory.name}>
                          <Link
                            href={subcategory.href}
                            className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <span>{subcategory.name}</span>
                            <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href={`/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        View all {category.title}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {category.featured ? (
                    <div className="col-span-3 pl-6">
                      <h4 className="mb-4 text-sm font-medium text-muted-foreground">
                        Featured
                      </h4>
                      <div className="grid grid-cols-2 gap-6">
                        {category.featured.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group block space-y-2"
                          >
                            <div className="overflow-hidden rounded-md">
                              <img
                                src={item.imageSrc}
                                alt={item.name}
                                className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div>
                              <h5 className="font-medium group-hover:text-primary transition-colors">
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
                      <div className="text-center">
                        <h4 className="text-lg font-medium">
                          Explore {category.title}
                        </h4>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Discover our full range of{" "}
                          {category.title.toLowerCase()} products
                        </p>
                        <Link
                          href={`/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                          Shop Now
                          <ChevronRight className="ml-1 h-4 w-4" />
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
