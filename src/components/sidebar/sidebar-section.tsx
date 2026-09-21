"use client";

import React from "react";

interface SidebarSectionProps {
  title?: string;
  isCollapsed: boolean;
  children: React.ReactNode;
}

export default function SidebarSection({
  title,
  isCollapsed,
  children,
}: SidebarSectionProps) {
  return (
    <div className="space-y-1">
      {title && !isCollapsed && (
        <h4 className="px-3 text-[11px] font-semibold tracking-wider text-gray-400 dark:text-neutral-500 uppercase select-none mb-1 mt-4 first:mt-0">
          {title}
        </h4>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
}
