"use client";
import { FC } from "react";
import clsx from "clsx";
import { Category } from "@/app/components/categories/categories";

interface CategoryCardSelect {
  data: Category;
  selected?: boolean;
  handleSelect: (label: string) => void;
}

export const CategoryCardSelect: FC<CategoryCardSelect> = ({
  data: { icon: Icon, label },
  selected,
  handleSelect,
}) => {
  const styles = {
    t: "border-purple-800",
    f: "border-transparent hover:border-purple-400",
  };

  return (
    <div
      onClick={() => {
        handleSelect(label);
      }}
      className={clsx(
        `flex flex-col gap-2 items-start p-4 border-2 text-neutral-700 rounded-lg cursor-pointer active:scale-90 transition`,
        styles[selected ? "t" : "f"]
      )}
    >
      <Icon size={24} />
      <span className="text-base">{label}</span>
    </div>
  );
};
