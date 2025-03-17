"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MegaMenu from "@/components/navigation/MegaMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItemCount = 3; // Mock data for cart items count

  // Handle scroll effect for glass morphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "glass-nav shadow-md" : "bg-transparent"}`}
    >
      {/* Top header with logo, search, and actions */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile menu button - only visible on small screens */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/90 flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-lg">
                  T
                </span>
              </div>
              <span className="text-xl font-bold hidden sm:inline-block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                TechStore
              </span>
            </div>
          </Link>

          {/* Search bar - responsive */}
          <div
            className={`${isSearchExpanded ? "absolute inset-x-0 top-0 glass-morphism p-4 md:relative md:p-0" : "hidden md:block"} flex-grow max-w-xl mx-4`}
          >
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pr-10 rounded-full glass-input h-10 pl-4"
                onBlur={() => setIsSearchExpanded(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 rounded-full hover:bg-white/20"
                onClick={() => setIsSearchExpanded(false)}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search button - visible on small screens */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-white/20"
              onClick={() => setIsSearchExpanded(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-white/20 hidden sm:flex"
            >
              <Heart className="h-5 w-5" />
            </Button>

            {/* Notifications button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-white/20 hidden sm:flex relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                2
              </span>
            </Button>

            {/* User account dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/20"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="glass-dropdown rounded-xl w-56 mt-1 p-1"
              >
                <DropdownMenuLabel className="text-center py-3 font-medium">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem className="rounded-lg hover:bg-white/20 focus:bg-white/20 my-1 cursor-pointer">
                  <Link
                    href="/account/profile"
                    className="w-full flex items-center gap-2 py-0.5"
                  >
                    <User className="h-4 w-4 opacity-70" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg hover:bg-white/20 focus:bg-white/20 my-1 cursor-pointer">
                  <Link
                    href="/account/orders"
                    className="w-full flex items-center gap-2 py-0.5"
                  >
                    <ShoppingCart className="h-4 w-4 opacity-70" />
                    <span>Orders</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg hover:bg-white/20 focus:bg-white/20 my-1 cursor-pointer">
                  <Link
                    href="/account/wishlist"
                    className="w-full flex items-center gap-2 py-0.5"
                  >
                    <Heart className="h-4 w-4 opacity-70" />
                    <span>Wishlist</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem className="rounded-lg hover:bg-white/20 focus:bg-white/20 my-1 cursor-pointer">
                  <Link
                    href="/auth/login"
                    className="w-full flex items-center gap-2 py-0.5"
                  >
                    <span>Login</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shopping cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-white/20"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground shadow-sm">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation with mega menu - hidden on mobile unless menu is open */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
        <MegaMenu />
      </div>
    </header>
  );
};

export default Header;
