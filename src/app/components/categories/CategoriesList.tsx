"use client";
import { categories } from "./categories";
import { useSearchParams } from "next/navigation";
import { CategoryItem } from "./CategoryItem";

export const CategoriesList = () => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");
  return (
    <div className="flex flex-row gap-5 justify-between items-center mt-4 mx-auto overflow-x-auto max-w-5xl">
      {categories.map((c) => (
        <CategoryItem key={c.label} data={c} selected={category == c.label} />
      ))}
    </div>
  );
};
