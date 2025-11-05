"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "@/types";

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}