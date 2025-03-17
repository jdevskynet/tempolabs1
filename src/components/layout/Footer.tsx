import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CreditCard,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  return (
    <footer
      className={cn(
        "w-full bg-slate-900 text-white py-12 px-4 md:px-8",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">TechStore</h3>
            <p className="text-slate-300 mb-4">
              Your one-stop shop for all things tech. Quality products,
              competitive prices, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-slate-400" />
                <span className="text-slate-300">
                  123 Tech Street, Digital City, 10001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-slate-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-slate-400" />
                <span className="text-slate-300">support@techstore.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for the latest products and exclusive
              offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods & Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} TechStore. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm mr-2">
                Payment Methods:
              </span>
              <CreditCard size={24} className="text-slate-300" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-300"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <img src="/visa.svg" alt="Visa" className="h-6 w-auto" />
              <img
                src="/mastercard.svg"
                alt="Mastercard"
                className="h-6 w-auto"
              />
            </div>
          </div>
          <div className="mt-6 text-center md:text-left">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-white transition-colors"
                >
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
