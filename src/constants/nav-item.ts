import {
  Home,
  BadgePlus,
  Plane,
  History,
  Settings,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export const mainNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Trip Management", href: "/trip-management", icon: Plane },
  { label: "Add Trip", href: "/add-trip", icon: BadgePlus },
  { label: "Trip History", href: "/trip-history", icon: History },
];

export const settingsNavItems: NavItem[] = [
  { label: "Your Account", href: "/settings", icon: Settings },
  { label: "Help Center", href: "#help", icon: HelpCircle },
];

export const navItems: NavItem[] = [...mainNavItems, ...settingsNavItems];

