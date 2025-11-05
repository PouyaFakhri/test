"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store/sidebarStore";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { PanelLeftClose, PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { leftSidebarItems } from "@/constants/leftSidebar";

export default function LeftSidebar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { isLeftCollapsed, toggleLeftSidebar } = useSidebarStore();

  return (
    <aside
      className={cn(
        "fixed top-14 bottom-0 left-0 flex flex-col glass border-r border-border/50",
        "transition-all duration-500 ease-out",
        "z-sidebar",
        isLeftCollapsed ? "w-16" : "w-56"
      )}
    >
      <ScrollArea className="flex-1 py-4">
        <nav className="flex flex-col gap-1.5 px-2">
          {leftSidebarItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <TooltipProvider key={item.href} delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full cursor-pointer justify-start gap-3 relative group transition-all duration-300",
                          "hover:bg-primary/10 hover:text-primary",
                          isActive && "bg-primary/15 text-primary font-semibold",
                          isLeftCollapsed && "justify-center px-2"
                        )}
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                        )}

                        {/* Icon */}
                        <Icon
                          className={cn(
                            "w-5 h-5 transition-all duration-300 group-hover:scale-110",
                            isActive && "text-primary"
                          )}
                        />

                        {/* Label */}
                        {!isLeftCollapsed && (
                          <span className="transition-opacity duration-300 text-sm">
                            {t(item.labelKey)}
                          </span>
                        )}

                        {/* Background effect */}
                        {isActive && (
                          <div className="absolute inset-0 bg-primary/5 rounded-lg -z-10" />
                        )}
                      </Button>
                    </Link>
                  </TooltipTrigger>

                  {/* Tooltip when collapsed */}
                  {isLeftCollapsed && (
                    <TooltipContent
                      side="right"
                      className="glass z-tooltip"
                      sideOffset={10}
                    >
                      <p className="font-medium">{t(item.labelKey)}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Toggle button */}
      <div className="p-3 border-t border-border/50">
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleLeftSidebar}
                className={cn(
                  "w-full h-10 rounded-lg group relative overflow-hidden transition-all duration-300",
                  "hover:bg-primary/10 hover:text-primary"
                )}
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {isLeftCollapsed ? (
                  <PanelLeft className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                ) : (
                  <PanelLeftClose className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="glass z-tooltip"
              sideOffset={10}
            >
              <p className="font-medium">
                {isLeftCollapsed ? t("common.open") : t("common.close")}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </aside>
  );
}
