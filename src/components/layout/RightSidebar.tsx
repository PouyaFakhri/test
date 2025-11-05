"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store/sidebarStore";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { PanelRightClose, PanelRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { rightSidebarItems } from "@/constants/rightSidebar";
export default function RightSidebar() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const { isRightCollapsed, toggleRightSidebar } = useSidebarStore();
  const isRTL = i18n.language === "fa";
  return (
    <aside
      className={cn(
        "fixed top-14 bottom-0 right-0 flex flex-col glass border-l border-border/50",
        "transition-all duration-500 ease-out",
        "z-sidebar",
        isRightCollapsed ? "w-16" : "w-56"
      )}
    >
      <ScrollArea className="flex-1 py-4">
        <nav className="flex flex-col gap-1.5 px-2">
          {rightSidebarItems.map((item) => {
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
                          "w-full h-10 transition-all duration-300 relative group",
                          "hover:bg-accent/10 hover:text-accent",
                          isActive && "bg-accent/15 text-accent font-semibold",
                          isRightCollapsed
                            ? "justify-center px-2"
                            : isRTL
                            ? "justify-start gap-3 flex-row-reverse pr-3"
                            : "justify-start gap-3 pl-3"
                        )}
                      >
                        {/* Active indicator line */}
                        {isActive && (
                          <div
                            className={cn(
                              "absolute top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-full",
                              isRTL ? "right-0 rounded-l-full" : "left-0 rounded-r-full"
                            )}
                          />
                        )}
                        {/* Icon */}
                        <Icon
                          className={cn(
                            "w-5 h-5 shrink-0 transition-transform duration-300",
                            "group-hover:scale-110",
                            isActive && "text-accent"
                          )}
                        />
                        {/* Label */}
                        {!isRightCollapsed && (
                          <span
                            className={cn(
                              "text-sm truncate transition-opacity duration-300",
                              isRTL ? "text-right" : "text-left"
                            )}
                          >
                            {t(item.labelKey)}
                          </span>
                        )}
                        {/* Background highlight */}
                        {isActive && (
                          <div className="absolute inset-0 bg-accent/5 rounded-lg -z-10" />
                        )}
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  {/* Tooltip for collapsed mode */}
                  {isRightCollapsed && (
                    <TooltipContent
                      side="left"
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
                onClick={toggleRightSidebar}
                className={cn(
                  "w-full h-10 rounded-lg",
                  "hover:bg-accent/10 hover:text-accent",
                  "transition-all duration-300 group relative overflow-hidden"
                )}
              >
                <div className="absolute inset-0 bg-linear-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {isRightCollapsed ? (
                  <PanelRight className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                ) : (
                  <PanelRightClose className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="glass z-tooltip"
              sideOffset={10}
            >
              <p className="font-medium">
                {isRightCollapsed ? t("common.open") : t("common.close")}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </aside>
  );
}