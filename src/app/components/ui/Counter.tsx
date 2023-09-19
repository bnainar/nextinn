"use client";
import { SchemaKeys } from "@/app/types/NewListingTypes";
import clsx from "clsx";
import { FC } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface CounterProps {
  title: string;
  subtitle: string;
  label: SchemaKeys;
  value: number;
  minValue?: number;
  onChange: (val: number) => void;
}

const Counter: FC<CounterProps> = ({
  title,
  subtitle,
  value = 1,
  minValue = 1,
  label,
  onChange,
}) => {
  return (
    <div className="flex flex-row justify-between py-4 w-full">
      <div className="flex flex-col">
        <div className="text-lg font-bold text-slate-900">{title}</div>
        <div className="text-slate-700">{subtitle}</div>
      </div>
      <div className="flex gap-2 items-center">
        <IconButton
          icon={AiOutlineMinus}
          disabled={value === minValue}
          onClick={() => onChange(value - 1)}
        />

        <div className="text-xl px-4 font-mono">{value}</div>
        <IconButton icon={AiOutlinePlus} onClick={() => onChange(value + 1)} />
      </div>
    </div>
  );
};

export { Counter };

interface IconButtonProps {
  icon: IconType;
  disabled?: boolean;
  onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({ icon: Icon, disabled, onClick }) => {
  const styles = {
    t: "text-neutral-600 cursor-not-allowed",
  };
  return (
    <button
      type="button"
      className="rounded-full flex items-center justify-center h-10 w-10 p-2 border-[1px] active:scale-90 transition
      border-slate-600 hover:border-slate-700 hover:bg-slate-300
      disabled:border-slate-400 disabled:text-slate-400"
      onClick={onClick}
    >
      <Icon className={clsx(disabled ? styles["t"] : "")} />
    </button>
  );
};

export { IconButton };
