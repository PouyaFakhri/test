"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { ReactNode, useEffect, useState } from "react";
export default function I18nProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
   
    // هنگام mount شدن، زبان ذخیره شده را اعمال کن
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, []);
  if (!mounted) {
    return <>{children}</>; // رندر اولیه بدون i18n
  }
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}