"use client";

import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const cartItemCount = 3; // Mock data for cart items count

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      {/* Top header with logo, search, and actions */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile menu button - only visible on small screens */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </div>
              <span className="text-xl font-bold hidden sm:inline-block">
                TechStore
              </span>
            </div>
          </Link>

          {/* Search bar - responsive */}
          <div
            className={`${isSearchExpanded ? "absolute inset-x-0 top-0 bg-background p-3 md:relative md:p-0" : "hidden md:block"} flex-grow max-w-xl mx-4`}
          >
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pr-10"
                onBlur={() => setIsSearchExpanded(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchExpanded(false)}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search button - visible on small screens */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchExpanded(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* User account dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/account/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/account/orders" className="w-full">
                    Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/account/wishlist" className="w-full">
                    Wishlist
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/auth/login" className="w-full">
                    Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shopping cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation with mega menu - hidden on mobile unless menu is open */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} md:block border-t`}
      >
        <MegaMenu />
      </div>
    </header>
  );
};

export default Header;
