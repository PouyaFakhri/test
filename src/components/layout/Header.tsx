"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun, Bell } from "lucide-react";
import { useTheme } from "next-themes";
import LanguageSwitcher from "@/components/buttons/LanguageSwitcher";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 h-14 glass border-b border-border/50 z-50 backdrop-blur-xl">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            IDP App
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full">
            <Bell className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}