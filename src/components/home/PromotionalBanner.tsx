import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface PromotionalBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundColor?: string;
  textColor?: string;
  imageUrl?: string;
  discount?: string;
  expiryDate?: string;
}

const PromotionalBanner = ({
  title = "Limited Time Offer: 20% Off All Electronics",
  description = "Shop our latest collection of premium tech products with exclusive discounts for a limited time only.",
  ctaText = "Shop Now",
  ctaLink = "/products",
  backgroundColor = "bg-gradient-to-r from-indigo-600 to-purple-600",
  textColor = "text-white",
  imageUrl = "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&q=80",
  discount = "20%",
  expiryDate = "June 30, 2023",
}: PromotionalBannerProps) => {
  return (
    <div
      className={`w-full ${backgroundColor} ${textColor} py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
    >
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMzZjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4LTE4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0tMTgtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMzZjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTE4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3 space-y-4">
            {discount && (
              <div className="inline-block bg-white text-indigo-700 font-bold px-4 py-1 rounded-full text-sm mb-2">
                SAVE {discount}
              </div>
            )}
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-xl">
              {description}
            </p>

            {expiryDate && (
              <p className="text-sm font-medium">
                Offer valid until {expiryDate}
              </p>
            )}

            <div className="pt-2">
              <Button
                asChild
                variant="secondary"
                className="group bg-white text-indigo-700 hover:bg-gray-100 hover:text-indigo-800 transition-all duration-300"
              >
                <Link href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {imageUrl && (
            <div className="md:w-1/3 relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src={imageUrl}
                  alt="Promotional offer"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
