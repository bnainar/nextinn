"use client";
import { FC } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
  resetFilter?: boolean;
}

const EmptyState: FC<EmptyStateProps> = ({ title, subtitle, resetFilter }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 h-full w-full items-center mt-24">
      <h2 className="text-2xl font-medium">
        {title ?? "Something Went Wrong"}
      </h2>
      <p className="text-neutral-600 mb-2">
        {subtitle ?? "Try changing the search filters"}
      </p>
      {resetFilter && (
        <Button
          variant="outline"
          width="content"
          onClick={() => router.push("/")}
        >
          Reset
        </Button>
      )}
    </div>
  );
};

export { EmptyState };
