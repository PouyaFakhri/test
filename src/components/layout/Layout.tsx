"use client";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebarStore";
import Header from "./Header";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import AllProviders from "@/providers/AllProviders";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { LayoutProps, Language } from "@/types";

export default function Layout({ children }: LayoutProps) {
  const { i18n } = useTranslation();
  const { isLeftCollapsed, isRightCollapsed } = useSidebarStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
   
    const savedLang = (localStorage.getItem("i18nextLng") || "fa") as Language;
    document.documentElement.dir = savedLang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = savedLang;
   
    if (savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    if (mounted) {
      const currentLang = i18n.language as Language;
      document.documentElement.dir = currentLang === "fa" ? "rtl" : "ltr";
      document.documentElement.lang = currentLang;
    }
  }, [i18n.language, mounted]);

  if (!mounted) {
    return (
      <div className="relative flex flex-col min-h-screen" dir="rtl">
        <div className="flex-1 pt-14 p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <AllProviders>
      <div
        className="relative flex flex-col min-h-screen overflow-hidden"
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
      >
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-base">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '1s' }}
          />
        </div>
        
        <Header />
       
        <div className="flex flex-1 pt-14 relative z-content">
          <LeftSidebar />
         
          <main
            className={cn(
              "flex-1 transition-all duration-500 ease-out p-6 pb-20 animate-fadeIn",
              isLeftCollapsed ? "ml-16" : "ml-14",
              isRightCollapsed ? "mr-16" : "mr-14"
            )}
          >
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
         
          <RightSidebar />
        </div>
       
        <Footer />
      </div>
    </AllProviders>
  );
}