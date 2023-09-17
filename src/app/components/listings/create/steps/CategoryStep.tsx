"use client";
import { categories } from "@/app/components/categories/categories";
import { FC } from "react";
import { CategoryCardSelect } from "../CategoryCardSelect";
import { SchemaKeys } from "@/app/types/NewListingTypes";

interface CategoryStepProps {
  category: string;
  changeFormValue: (id: SchemaKeys, val: any) => void;
}

const CategoryStep: FC<CategoryStepProps> = ({ category, changeFormValue }) => {
  return (
    <div>
      <div className="mb-3">
        <div className="font-bold text-xl text-slate-800">
          Which of these best describe your place?
        </div>
        <span className="text-neutral-700 mb-5">Pick a category</span>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-5 max-h-72 overflow-y-auto">
          {categories.map((c) => (
            <CategoryCardSelect
              key={c.label}
              data={c}
              selected={category == c.label}
              handleSelect={(label) => changeFormValue("category", label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { CategoryStep };
