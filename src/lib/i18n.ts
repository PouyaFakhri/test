"use client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "@/utils/locales/en";
import { fa } from "@/utils/locales/fa";
// فقط در کلاینت مقداردهی اولیه شود
if (typeof window !== 'undefined' && !i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources: {
      fa: { translation: fa },
      en: { translation: en },
    },
    lng: "fa",
    fallbackLng: "fa",
    interpolation: { escapeValue: false },
  });
}
export default i18next;