// src/app/layout.tsx
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./../index.css"; // Adjusted path to global styles
import QueryProvider from "@/components/QueryProvider";

export const metadata: Metadata = {
  title: "Launchpad AI",
  description: "From Idea to Impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <QueryProvider>
            <TooltipProvider>
              <div className="min-h-screen">
                <Navbar />
                <main className="pt-16">{children}</main>
                <Footer />
              </div>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
