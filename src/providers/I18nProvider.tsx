"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { ReactNode, useEffect, useState } from "react";
import type { I18nProviderProps, Language } from "@/types";

export default function I18nProvider({ children }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
   
    const savedLang = localStorage.getItem("i18nextLng") as Language;
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}