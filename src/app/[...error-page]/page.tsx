import Image from "next/image";
import React from "react";
import notFound from "@/assets/not-found.svg";

const NotFound = () => {
  return (
    <div className="px-2 py-6">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image src={notFound} alt="404" />
        <h1 className="text-3xl text-gray-700 dark:text-white font-bold">
          Page Not Found
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
