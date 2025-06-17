"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "./ui/tooltip";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </ClerkProvider>
  );
}
