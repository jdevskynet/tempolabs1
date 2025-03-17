import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryProps {
  id: string;
  name: string;
  image: string;
  description: string;
  slug: string;
}

interface CategoryShowcaseProps {
  title?: string;
  description?: string;
  categories?: CategoryProps[];
}

export default function CategoryShowcase({
  title = "Shop By Category",
  description = "Browse our wide selection of tech products across popular categories",
  categories = [
    {
      id: "1",
      name: "Laptops & Computers",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
      description: "Powerful laptops and desktop computers for work and play",
      slug: "laptops-computers",
    },
    {
      id: "2",
      name: "Smartphones",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
      description: "Latest smartphones with cutting-edge features",
      slug: "smartphones",
    },
    {
      id: "3",
      name: "Audio",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80",
      description: "Headphones, speakers, and audio accessories",
      slug: "audio",
    },
    {
      id: "4",
      name: "Gaming",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&q=80",
      description: "Gaming consoles, accessories, and peripherals",
      slug: "gaming",
    },
    {
      id: "5",
      name: "Smart Home",
      image:
        "https://images.unsplash.com/photo-1558002038-bb0237f4e204?w=600&q=80",
      description: "Connected devices to make your home smarter",
      slug: "smart-home",
    },
    {
      id: "6",
      name: "Wearables",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
      description: "Smartwatches, fitness trackers, and wearable tech",
      slug: "wearables",
    },
  ],
}: CategoryShowcaseProps) {
  return (
    <section className="w-full py-12 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl mb-2">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.id}
              className="group transition-all duration-300 hover:shadow-lg"
            >
              <Card className="overflow-hidden border-0 shadow-md h-full">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    Shop Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
