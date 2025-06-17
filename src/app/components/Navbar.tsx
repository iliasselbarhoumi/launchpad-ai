"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Coins,
  HandCoins,
  Lightbulb,
  Menu,
  Rocket,
  WandSparkles,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Button } from "@/app/components/ui/button";
import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Badge } from "./ui/badge";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const { userMock } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/Logo_without_BG_Black.png"
                alt="Launcherpad Logo"
                className="h-10 md:h-10"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {isSignedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/ideas/list"
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Ideas
                </Link>
                <Link
                  href="/mvp-plans"
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  MVP Plans
                </Link>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1.5 press-effect cursor-pointer bg-amber-50 text-amber-700 border-amber-200/80 hover:bg-amber-100 px-3 py-1.5"
                    >
                      <HandCoins className="h-4 w-4" />
                      <span className="font-bold">{userMock.credits}</span>
                      <span className="hidden sm:inline font-medium">
                        Credits
                      </span>
                    </Badge>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64" align="end">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-semibold">Credit Balance</h4>
                      <Badge variant="secondary" className="font-semibold">
                        {userMock.credits} Total
                      </Badge>
                    </div>
                    {userMock.creditBreakdown ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Lightbulb className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm">Idea Generation</span>
                          </div>
                          <span className="font-semibold text-sm">
                            {userMock.creditBreakdown.generation}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Idea Validation</span>
                          </div>
                          <span className="font-semibold text-sm">
                            {userMock.creditBreakdown.validation}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Rocket className="h-4 w-4 text-purple-500" />
                            <span className="text-sm">Idea Execution</span>
                          </div>
                          <span className="font-semibold text-sm">
                            {userMock.creditBreakdown.execution}
                          </span>
                        </div>
                      </div>
                    ) : null}
                    <Button
                      className="w-full mt-4"
                      onClick={() => {
                        router.push("/billing");
                      }}
                    >
                      <WandSparkles />
                      Buy Credits
                    </Button>
                  </HoverCardContent>
                </HoverCard>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 transition-opacity hover:opacity-90">
                      <Avatar className="h-9 w-9">
                        <AvatarImage
                          src={user?.imageUrl}
                          alt={user?.fullName || ""}
                        />
                        <AvatarFallback className="bg-gradient-to-r from-launchpad-purple to-launchpad-purple-light text-white font-semibold">
                          {user?.firstName?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-slate-700 hidden lg:block">
                        {user?.fullName}
                      </span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 mt-2">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/billing">Billing</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/feedback">Feedback</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <SignOutButton>
                        <button className="w-full text-left text-red-600 hover:text-red-700">
                          Sign Out
                        </button>
                      </SignOutButton>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <a
                  href="/#how-it-works"
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="/#testimonials"
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Case Studies
                </a>
                <SignInButton mode="modal">
                  <Button>Get Started</Button>
                </SignInButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {isSignedIn ? (
              <>
                <Link
                  href="/profile"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
                >
                  Dashboard
                </Link>
                <Link
                  href="/ideas/list"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
                >
                  Ideass
                </Link>
                <span
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 cursor-not-allowed"
                >
                  MVP Plans
                </span>
                <SignOutButton>
                  <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-700 hover:bg-slate-100 mt-2 pt-3 border-t">
                    Log out
                  </button>
                </SignOutButton>
              </>
            ) : (
              <>
                <a
                  href="/#how-it-works"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
                >
                  How It Works
                </a>
                <a
                  href="/#testimonials"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
                >
                  Case Studies
                </a>
                <SignInButton mode="modal">
                  <Button className="w-full mt-4">Get Started</Button>
                </SignInButton>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
