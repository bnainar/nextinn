import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ButtonProps {
  variant: "filled" | "outline";
  type?: "button" | "submit";
  width: "full" | "content";
  className?: string;
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  hasIcon?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}
const styles = {
  filled: "text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500",
  outline:
    "text-gray-800 border border-neutral-700 hover:border-gray-950 hover:bg-gray-300 focus:ring-gray-500",
  full: "w-full",
  content: "w-max",
};
const Button: FC<ButtonProps> = ({
  variant,
  children,
  className,
  type,
  isLoading,
  disabled,
  width,
  icon,
  hasIcon = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `px-5 py-2 text-lg rounded-lg inline-flex justify-between transition items-center gap-3`,
        `focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-slate-600 disabled:text-slate-400`,
        styles[variant],
        styles[width],
        className
      )}
    >
      {hasIcon ?? <span className="mr-0.5 -ml-0.5 h-5 w-5">{icon}</span>}
      <span className={clsx(width === "full" && "grow")}>
        {isLoading ? "Loading..." : children}
      </span>
    </button>
  );
};

export { Button };
