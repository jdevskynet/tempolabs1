import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts
          title="Featured Tech Products"
          subtitle="Discover our selection of premium electronics and gadgets"
        />
        <CategoryShowcase />
        <PromotionalBanner
          title="Summer Tech Sale: Up to 40% Off"
          description="Upgrade your tech with amazing discounts on our most popular products. Limited time offer!"
          discount="40%"
          expiryDate="August 31, 2023"
          backgroundColor="bg-gradient-to-r from-blue-600 to-purple-600"
        />
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Why Choose TechStore
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We offer the best selection of tech products with exceptional
                service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600 dark:text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Quality Products
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We carefully select only the best tech products from trusted
                  brands.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600 dark:text-green-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Competitive Prices
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We offer the best prices on the market with regular discounts
                  and promotions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600 dark:text-purple-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Fast Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our customer support team is available 24/7 to assist you with
                  any questions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
