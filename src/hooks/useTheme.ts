"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { UseThemeMode, ThemeMode } from "@/types";

export const useThemeMode = (): UseThemeMode => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mode = (resolvedTheme === "dark" ? "dark" : "light") as ThemeMode;
  const toggle = () => setTheme(mode === "dark" ? "light" : "dark");
  const setLight = () => setTheme("light");
  const setDark = () => setTheme("dark");

  return { mode, toggle, setLight, setDark, isMounted };
};