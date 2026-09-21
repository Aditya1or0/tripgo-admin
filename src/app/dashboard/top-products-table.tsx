"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowUpDown,
  Filter,
  Smartphone,
  Laptop,
  Footprints,
  Headphones,
} from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  stocks: string;
  price: string;
  sales: string;
  earnings: string;
  icon: React.ComponentType<{ className?: string }>;
}

const initialProducts: ProductItem[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    stocks: "8,200",
    price: "$999.00",
    sales: "4,800",
    earnings: "$4,795,200",
    icon: Smartphone,
  },
  {
    id: "2",
    name: "MacBook Air M2",
    stocks: "1,020",
    price: "$1,299",
    sales: "3,200",
    earnings: "$4,156,800",
    icon: Laptop,
  },
  {
    id: "3",
    name: "Google Pixel 8",
    stocks: "1,500",
    price: "$699.00",
    sales: "800",
    earnings: "$559,200",
    icon: Smartphone,
  },
  {
    id: "4",
    name: "Nike Air Max 90",
    stocks: "2,400",
    price: "$130.00",
    sales: "1,800",
    earnings: "$234,000",
    icon: Footprints,
  },
  {
    id: "5",
    name: "Galaxy Buds Pro",
    stocks: "650",
    price: "$199.00",
    sales: "1,000",
    earnings: "$199,000",
    icon: Headphones,
  },
];

export default function TopProductsTable() {
  const [products] = useState<ProductItem[]>(initialProducts);

  return (
    <div className="bg-white dark:bg-[#15171B] border border-[#EEF0F4] dark:border-neutral-800/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-gray-500 dark:text-gray-400" />
          <h3 className="text-base font-semibold text-gray-950 dark:text-white tracking-tight">
            Top Products
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200/80 dark:border-neutral-800 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
          >
            <ArrowUpDown className="size-3 text-gray-400" />
            Sort
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200/80 dark:border-neutral-800 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
          >
            <Filter className="size-3 text-gray-400" />
            Filter
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100 dark:border-neutral-800/80 text-gray-400 dark:text-neutral-500">
              <th className="pb-3 font-medium text-left">Product</th>
              <th className="pb-3 font-medium text-right">Stocks</th>
              <th className="pb-3 font-medium text-right">Price</th>
              <th className="pb-3 font-medium text-right">Sales</th>
              <th className="pb-3 font-medium text-right">Earnings</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-neutral-800/40">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50/60 dark:hover:bg-neutral-800/30 transition-colors"
                >
                  {/* Product Column */}
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 text-gray-600 dark:text-gray-300">
                        <Icon className="size-4" />
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white truncate">
                        {product.name}
                      </span>
                    </div>
                  </td>

                  {/* Stocks */}
                  <td className="py-3 px-2 text-right font-medium text-gray-600 dark:text-gray-300">
                    {product.stocks}
                  </td>

                  {/* Price */}
                  <td className="py-3 px-2 text-right font-medium text-gray-600 dark:text-gray-300">
                    {product.price}
                  </td>

                  {/* Sales */}
                  <td className="py-3 px-2 text-right font-medium text-gray-600 dark:text-gray-300">
                    {product.sales}
                  </td>

                  {/* Earnings */}
                  <td className="py-3 pl-2 text-right font-semibold text-gray-950 dark:text-white">
                    {product.earnings}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
