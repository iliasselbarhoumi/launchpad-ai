import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster as Sonner } from "./components/ui/sonner";
// import { Toaster } from "./components/ui/toaster";
import ClientProviders from "./components/ClientProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Launcherpad",
  description: "AI-powered business plan generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <div className="min-h-screen flex flex-col">
            {/* <Navbar /> */}
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
          {/* <Toaster /> */}
          <Sonner />
        </ClientProviders>
      </body>
    </html>
  );
}
