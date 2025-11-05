"use client";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { cn } from "@/lib/utils";
export function ThemeToggleButton() {
  const { t } = useTranslation();
  const { mode, toggle, isMounted } = useThemeMode();
  const tooltipText = mode === "dark"
    ? t("theme.switch_to_light")
    : t("theme.switch_to_dark");
  if (!isMounted) {
    return (
      <button
        className="flex items-center justify-center w-10 h-10 rounded-xl glass"
        aria-hidden="true"
        disabled
      >
        <span className="w-5 h-5 bg-muted rounded-full animate-pulse" />
      </button>
    );
  }
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={toggle}
            className={cn(
              "relative flex items-center justify-center w-10 h-10",
              "rounded-xl glass overflow-hidden",
              "transition-all duration-300",
              "hover:scale-110 hover:shadow-lg",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "group"
            )}
            aria-label={tooltipText}
          >
            {/* Background Glow */}
            <div className={cn(
              "absolute inset-0 transition-opacity duration-500",
              mode === "dark"
                ? "bg-gradient-to-br from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100"
                : "bg-gradient-to-br from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100"
            )} />
           
            {/* Icons */}
            <div className="relative w-5 h-5">
              <Sun className={cn(
                "absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-500",
                mode === "dark"
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-90 scale-0 opacity-0"
              )} />
              <Moon className={cn(
                "absolute inset-0 w-5 h-5 text-indigo-500 transition-all duration-500",
                mode === "dark"
                  ? "-rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              )} />
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="glass z-tooltip"
          sideOffset={8}
        >
          <p className="font-medium">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
