"use client";

import React from "react";
import Link from "next/link";
import { LucideIcon, ChevronDown, ChevronRight } from "lucide-react";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";

interface SidebarItemProps {
    label: string;
    href: string;
    icon: LucideIcon;
    isActive: boolean;
    isCollapsed: boolean;
    hasSubmenu?: boolean;
    isSubmenuOpen?: boolean;
    onToggleSubmenu?: () => void;
    badge?: string;
}

export default function SidebarItem({
    label,
    href,
    icon: Icon,
    isActive,
    isCollapsed,
    hasSubmenu,
    isSubmenuOpen,
    onToggleSubmenu,
    badge,
}: SidebarItemProps) {
    const content = (
        <div
            onClick={hasSubmenu ? (e) => { e.preventDefault(); onToggleSubmenu?.(); } : undefined}
            className={`group flex items-center ${isCollapsed ? "justify-center px-0 py-2.5" : "justify-between px-3 py-2.5"
                } rounded text-sm font-semibold transition-all duration-150 select-none cursor-pointer ${isActive
                    ? `
    bg-gradient-to-r
    from-[#3B91D0]/15
    via-[#3B91D0]/10
    to-[#35A9A4]/15
    text-[#247FA5]
    dark:from-[#3B91D0]/20
    dark:via-[#3B91D0]/10
    dark:to-[#35A9A4]/20
    dark:text-[#55BFC0]
    font-semibold
  `
                    : `
    text-gray-500
    dark:text-gray-400
    hover:bg-gray-50
    dark:hover:bg-gray-600
    hover:text-gray-900
    dark:hover:text-gray-100
  `
                }`}
        >
            <div className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"}`}>
                <Icon
                    className={`size-4.5 shrink-0 transition-colors ${isActive
                        ? ""
                        : "text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        }`}
                />
                {!isCollapsed && (
                    <span className="truncate tracking-tight">{label}</span>
                )}
            </div>

            {!isCollapsed && (
                <div className="flex items-center gap-1.5 ml-auto">
                    {badge && (
                        <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${isActive
                                ? "bg-white/20 text-white dark:bg-black/10 dark:text-black"
                                : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400"
                                }`}
                        >
                            {badge}
                        </span>
                    )}
                    {hasSubmenu && (
                        <div className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200">
                            {isSubmenuOpen ? (
                                <ChevronDown className="size-3.5" />
                            ) : (
                                <ChevronRight className="size-3.5" />
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );

    if (isCollapsed) {
        return (
            <Tooltip delayDuration={150}>
                <TooltipTrigger asChild>
                    {hasSubmenu ? (
                        <div>{content}</div>
                    ) : (
                        <Link href={href} className="block">
                            {content}
                        </Link>
                    )}
                </TooltipTrigger>
                <TooltipContent side="right" className="font-medium text-xs">
                    {label}
                </TooltipContent>
            </Tooltip>
        );
    }

    return hasSubmenu ? (
        <div>{content}</div>
    ) : (
        <Link href={href} className="block">
            {content}
        </Link>
    );
}
