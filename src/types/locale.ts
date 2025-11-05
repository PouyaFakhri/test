export type Language = "fa" | "en";

export interface TranslationKeys {
  common: {
    home: string;
    dashboard: string;
    settings: string;
    login: string;
    logout: string;
    email: string;
    password: string;
    appName: string;
    open: string;
    close: string;
  };
  sidebar: {
    home: string;
    dashboard: string;
    settings: string;
    reports: string;
    users: string;
    analytics: string;
    notifications: string;
    messages: string;
    help: string;
  };
  theme: {
    switch_to_dark: string;
    switch_to_light: string;
    switch_to_persian: string;
    switch_to_english: string;
  };
  home: {
    hero_title: string;
    hero_desc: string;
    cta_start: string;
    cta_learn: string;
    card_smart: string;
    card_smart_desc: string;
    card_growth: string;
    card_growth_desc: string;
    card_team: string;
    card_team_desc: string;
    card_awards: string;
    card_awards_desc: string;
    card_goals: string;
    card_goals_desc: string;
    card_performance: string;
    card_performance_desc: string;
    feature_goals: string;
    feature_goals_desc: string;
    feature_goals_tag1: string;
    feature_goals_tag2: string;
    feature_team: string;
    feature_team_desc: string;
    feature_team_tag1: string;
    feature_team_tag2: string;
  };
}

export interface I18nProviderProps {
  children: React.ReactNode;
}