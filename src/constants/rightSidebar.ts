import { Bell, MessageSquare, HelpCircle, Settings } from "lucide-react";
import type { NavigationItem } from "@/types";

export const rightSidebarItems: NavigationItem[] = [
  {
    href: "/notifications",
    labelKey: "sidebar.notifications",
    icon: Bell,
  },
  {
    href: "/messages",
    labelKey: "sidebar.messages",
    icon: MessageSquare,
  },
  {
    href: "/help",
    labelKey: "sidebar.help",
    icon: HelpCircle,
  },
  {
    href: "/settings",
    labelKey: "sidebar.settings",
    icon: Settings,
  },
];