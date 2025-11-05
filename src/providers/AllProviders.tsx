"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "./ThemeProvider";
import I18nProvider from "./I18nProvider";

export default function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <TooltipProvider 
          delayDuration={200}
          skipDelayDuration={100}
        >
          {children}
        </TooltipProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}