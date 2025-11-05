"use client";
import { useTranslation } from "react-i18next";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import SkeletonLoading from "@/components/templates/SkeletonLoading";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { homeCards, homeFeatures } from "@/constants/home";
export default function HomePage() {
  const { t, ready, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!ready || !mounted) return <SkeletonLoading />;
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={cn(
                "group neo p-6 rounded-xl hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden",
                card.gradient
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none",
                  card.gradient
                )}
              />
              <div className="relative z-10">
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl bg-linear-to-br p-3 mb-4 mx-auto flex items-center justify-center shadow-lg",
                    "group-hover:scale-110 transition-transform duration-300",
                    card.color
                  )}
                >
                  <Icon className="w-full h-full text-white" />
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(card.descKey)}
                  </p>
                  <div
                    className={cn(
                      "inline-flex px-3 py-1 rounded-full bg-linear-to-r bg-opacity-10 text-sm font-semibold mt-3",
                      "group-hover:scale-105 transition-transform duration-300",
                      card.color
                    )}
                  >
                    {card.stats}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* Features Section */}
      <section className="grid md:grid-cols-2 gap-6">
        {homeFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="glass p-6 rounded-xl space-y-4 hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                    feature.gradient
                  )}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {t(feature.titleKey)}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {t(feature.descKey)}
              </p>
              <div className="flex gap-2 flex-wrap">
                {feature.tagKeys.map((key, i) => (
                  <span
                    key={i}
                    className={cn(
                      "px-3 py-1 text-xs rounded-full transition-all duration-300 hover:scale-105 cursor-pointer",
                      index === 0
                        ? "bg-primary/10 text-primary hover:bg-primary/20"
                        : "bg-green-500/10 text-green-600 hover:bg-green-500/20"
                    )}
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
              <div
                className={cn(
                  "w-0 h-0.5 rounded-full transition-all duration-500 group-hover:w-full",
                  feature.gradient
                )}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}