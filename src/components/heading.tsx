import type { Heading } from "@/interfaces/heading";
import React from "react";

const Heading = ({ title }: Heading) => {
  return (
    <div>
      <h1
        className="relative inline-block text-4xl text-gray-600 dark:text-white/90 font-bold
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-6
     after:bg-sky-500 dark:after:bg-orange-400"
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
