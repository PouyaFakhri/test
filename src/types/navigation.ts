import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  href: string;
  labelKey: string;
  icon: LucideIcon;
}

export interface SidebarState {
  isLeftCollapsed: boolean;
  isRightCollapsed: boolean;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

export type LayoutDirection = "ltr" | "rtl";

export interface LayoutProps {
  children: React.ReactNode;
}