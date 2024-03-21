import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="mt-32 flex flex-col justify-center items-center gap-4 w-[500px] mx-auto">
      <h1 className="font-black text-gray-600 dark:text-zinc-300">
        Oops! Page Not Found
      </h1>
      <p className="text-red-500 font-semibold">
        We&apos;re sorry, but the page you were looking for does not exist.
      </p>
      <div className="flex items-center gap-3">
        <ChevronLeft className="w-5 h-5" />
        <p className="text-gray-600 dark:text-zinc-400">Go Back to</p>
        <Link href={"/"} className="font-bold underline">
          Home
        </Link>
      </div>
    </div>
  );
};

export default notFound;
