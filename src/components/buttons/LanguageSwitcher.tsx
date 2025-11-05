"use client";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import type { Language } from "@/types";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const currentLang = i18n.language as Language;
    document.documentElement.dir = currentLang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang: Language = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
   
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const tooltipText = i18n.language === "fa"
    ? "Switch to English"
    : "تغییر به فارسی";

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className={cn(
              "glass min-w-[70px] group relative overflow-hidden",
              "transition-all duration-300 hover:scale-105 hover:shadow-lg"
            )}
            aria-label={tooltipText}
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Languages className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
            <span className="relative font-semibold">
              {i18n.language === "fa" ? "EN" : "فا"}
            </span>
          </Button>
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