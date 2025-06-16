// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "./components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Launchpad AI",
  description: "AI-powered business plan generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
