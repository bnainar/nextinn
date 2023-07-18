import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ButtonProps {
  variant: "filled" | "outline";
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  isLoading?: boolean;
  icon?: ReactNode;
  width: "full" | "content";
}
const styles = {
  filled:
    "text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
  outline:
    "text-gray-800 border border-gray-900 hover:border-gray-950 hover:bg-gray-300",
  full: "w-full",
  content: "w-max",
};
const Button: FC<ButtonProps> = ({
  variant,
  children,
  className,
  type,
  isLoading,
  width,
  icon,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        `px-5 py-2 text-lg rounded-lg flex justify-between items-center gap-4 `,
        styles[variant],
        styles[width],
        className
      )}
    >
      {icon}
      <span className={clsx(width === "full" && "grow")}>
        {isLoading ? "Loading..." : children}
      </span>
    </button>
  );
};

export { Button };
