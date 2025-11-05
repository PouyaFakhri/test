import { Sparkles, TrendingUp, Users, Award, Target, Zap } from "lucide-react";
export const homeCards = [
  {
    icon: Sparkles,
    titleKey: "home.card_smart",
    descKey: "home.card_smart_desc",
    color: "from-violet-500 to-purple-600",
    stats: "1.2k",
    gradient: "bg-gradient-to-br from-violet-500/20 to-purple-600/20"
  },
  {
    icon: TrendingUp,
    titleKey: "home.card_growth",
    descKey: "home.card_growth_desc",
    color: "from-blue-500 to-cyan-600",
    stats: "+25%",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20"
  },
  {
    icon: Users,
    titleKey: "home.card_team",
    descKey: "home.card_team_desc",
    color: "from-green-500 to-emerald-600",
    stats: "850+",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-600/20"
  },
  {
    icon: Award,
    titleKey: "home.card_awards",
    descKey: "home.card_awards_desc",
    color: "from-yellow-500 to-orange-600",
    stats: "15",
    gradient: "bg-gradient-to-br from-yellow-500/20 to-orange-600/20"
  },
  {
    icon: Target,
    titleKey: "home.card_goals",
    descKey: "home.card_goals_desc",
    color: "from-pink-500 to-rose-600",
    stats: "98%",
    gradient: "bg-gradient-to-br from-pink-500/20 to-rose-600/20"
  },
  {
    icon: Zap,
    titleKey: "home.card_performance",
    descKey: "home.card_performance_desc",
    color: "from-indigo-500 to-purple-600",
    stats: "2.5x",
    gradient: "bg-gradient-to-br from-indigo-500/20 to-purple-600/20"
  },
];
export const homeFeatures = [
  {
    icon: Target,
    titleKey: "home.feature_goals",
    descKey: "home.feature_goals_desc",
    tagKeys: ["home.feature_goals_tag1", "home.feature_goals_tag2"],
    gradient: "bg-gradient-to-r from-primary to-accent",
  },
  {
    icon: Users,
    titleKey: "home.feature_team",
    descKey: "home.feature_team_desc",
    tagKeys: ["home.feature_team_tag1", "home.feature_team_tag2"],
    gradient: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
];