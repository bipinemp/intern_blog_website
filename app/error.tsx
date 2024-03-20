"use client";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mt-32 flex flex-col justify-center items-center gap-4 w-[500px] mx-auto">
      <h1 className="font-black text-gray-600 dark:text-zinc-300">
        Something went wrong!
      </h1>
      <p className="text-red-500 font-semibold">{error.message}</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
