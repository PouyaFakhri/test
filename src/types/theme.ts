export type ThemeMode = "light" | "dark" | "system";

export interface UseThemeMode {
  mode: ThemeMode;
  toggle: () => void;
  setLight: () => void;
  setDark: () => void;
  isMounted: boolean;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}