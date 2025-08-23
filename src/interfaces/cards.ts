import { LucideIcon } from "lucide-react";

export interface DocumentCardProps {
  title: string;
  filesCount: number;
  storageUsed: string;
  usedPercentage: number;
  bgColor?: string;
  progressColor?: string;
  icon?: LucideIcon;
  iconColor?: string;
}
