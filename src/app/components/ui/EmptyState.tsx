import { FC } from "react";
import { Button } from "./Button";
import Link from "next/link";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
  resetButton?: boolean;
  resetLabel?: string;
}

const EmptyState: FC<EmptyStateProps> = ({
  title,
  subtitle,
  resetButton,
  resetLabel,
}) => {
  return (
    <div className="flex flex-col gap-2 h-full w-full items-center mt-36 text-center">
      <h2 className="text-3xl text-neutral-800 font-medium">
        {title ?? "Something Went Wrong"}
      </h2>
      <p className="text-lg text-neutral-600 mb-4">
        {subtitle ?? resetButton ? "Try changing the search filters" : null}
      </p>
      {resetButton && resetLabel && (
        <Link href="/">
          <Button variant="outline" width="content">
            {resetLabel}
          </Button>
        </Link>
      )}
    </div>
  );
};

export { EmptyState };
