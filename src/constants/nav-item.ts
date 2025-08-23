import {
  Home,
  BadgePlus,
  Plane,
  History,
  Settings,
  LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon; // type of all Lucide icons
};

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Add Trip", href: "/add-trip", icon: BadgePlus },
  { label: "Trip Management", href: "/trip-management", icon: Plane },
  { label: "Trip History", href: "/history", icon: History },
  { label: "Your Account", href: "/settings", icon: Settings },
];
