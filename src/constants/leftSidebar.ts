import { Home, BarChart3, Users, FileText, Settings } from "lucide-react";
import type { NavigationItem } from "@/types";

export const leftSidebarItems: NavigationItem[] = [
  {
    href: "/",
    labelKey: "sidebar.home",
    icon: Home,
  },
  {
    href: "/dashboard",
    labelKey: "sidebar.dashboard",
    icon: BarChart3,
  },
  {
    href: "/users",
    labelKey: "sidebar.users",
    icon: Users,
  },
  {
    href: "/reports",
    labelKey: "sidebar.reports",
    icon: FileText,
  },
  {
    href: "/settings",
    labelKey: "sidebar.settings",
    icon: Settings,
  },
];