import clsx from "clsx";
import { FC, ReactNode } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  variant: "filled" | "outline";
  type?: "button" | "submit";
  width?: "full" | "content";
  className?: string;
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: IconType;
  onClick?: (e: any) => void;
}
const styles = {
  filled:
    "text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 disabled:brightness-50",
  outline:
    "text-gray-800 border border-neutral-700 hover:border-gray-950 hover:bg-gray-300 focus:ring-gray-500 disabled:brightness-50",
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
  width = "content",
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        `px-5 py-2 text-lg rounded-lg inline-flex justify-between transition items-center gap-3`,
        `focus:outline-none focus:ring-2 focus:ring-offset-2`,
        styles[variant],
        styles[width],
        className
      )}
    >
      {!isLoading && Icon && <Icon className="mr-0.5 -ml-0.5 h-5 w-5" />}
      {isLoading && (
        <AiOutlineLoading
          size={20}
          className="animate-spin mr-0.5 -ml-0.5 h-5 w-5"
          fill="white"
        />
      )}
      <span className="m-auto">{isLoading ? "Loading..." : children}</span>
    </button>
  );
};
//span className={clsx(width === "full" && "grow")}
export { Button };
