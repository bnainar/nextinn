"use client";
import { FC } from "react";

import clsx from "clsx";
import { Category } from "../../categories/categories";

interface CategoryCardSelect {
  data: Category;
  selected?: boolean;
  handleSelect: (label: string) => void;
}

const CategoryCardSelect: FC<CategoryCardSelect> = ({
  data: { icon: Icon, label },
  selected,
  handleSelect,
}) => {
  const styles = {
    t: "text-neutral-800 border-purple-800",
    f: "text-neutral-500 hover:text-neutral-800 border-transparent hover:border-purple-400",
  };

  return (
    <div
      onClick={() => handleSelect(label)}
      className={clsx(
        `flex flex-row gap-2 items-center p-4 border-2 rounded-lg cursor-pointer active:scale-90 transition`,
        styles[selected ? "t" : "f"]
      )}
    >
      <Icon size={24} />
      <span className="text-base">{label}</span>
    </div>
  );
};

export { CategoryCardSelect };
