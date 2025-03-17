"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface HeroSectionProps {
  slides?: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
  }[];
}

export default function HeroSection({
  slides = [
    {
      id: "1",
      title: "New Tech Arrivals",
      description:
        "Discover the latest gadgets and innovations with exclusive launch offers.",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&q=80",
      ctaText: "Shop Now",
      ctaLink: "/category/new-arrivals",
    },
    {
      id: "2",
      title: "Summer Tech Sale",
      description: "Up to 40% off on selected electronics and accessories.",
      imageUrl:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1400&q=80",
      ctaText: "View Deals",
      ctaLink: "/promotions/summer-sale",
    },
    {
      id: "3",
      title: "Smart Home Essentials",
      description:
        "Transform your living space with cutting-edge smart home technology.",
      imageUrl:
        "https://images.unsplash.com/photo-1558002038-bb0237f4b3ee?w=1400&q=80",
      ctaText: "Explore",
      ctaLink: "/category/smart-home",
    },
  ],
}: HeroSectionProps) {
  return (
    <section className="w-full bg-background py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative overflow-hidden rounded-lg">
                  {/* Hero Image */}
                  <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg">
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                      <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-lg">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-white/90 text-lg mb-6">
                          {slide.description}
                        </p>
                        <Button
                          size="lg"
                          className="group"
                          onClick={() =>
                            console.log(`Navigating to ${slide.ctaLink}`)
                          }
                        >
                          {slide.ctaText}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="-right-4 bg-white/80 hover:bg-white" />
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={`indicator-${index}`}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-primary transition-colors"
                aria-label={`Go to slide ${index + 1}`}
                // In a real implementation, this would control the carousel
                onClick={() => console.log(`Navigate to slide ${index + 1}`)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
