import { DocumentCardProps } from "@/interfaces/cards";
import React from "react";

const Cards: React.FC<DocumentCardProps> = ({
  title,
  filesCount,
  storageUsed,
  usedPercentage,
  bgColor = "bg-blue-100",
  progressColor = "bg-blue-500",
  icon: Icon,
  iconColor = "text-gray-700",
}) => {
  return (
    <div
      className={`p-6 rounded-2xl ${bgColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 `}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800  dark:text-white">
          {title}
        </h3>
        {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-200">
          {filesCount.toLocaleString()} Files
        </p>
        <p className="text-2xl font-bold text-gray-800">{storageUsed}</p>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="w-full bg-white bg-opacity-60 rounded-full h-2">
          <div
            className={`h-2 ${progressColor} rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${Math.min(usedPercentage, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
