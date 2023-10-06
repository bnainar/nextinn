import { Category } from "@/app/components/categories/categories";
import { FC } from "react";

interface ListingCategoryProps {
  category?: Category;
}

export const ListingCategory: FC<ListingCategoryProps> = ({ category }) => {
  if (!category) return null;
  const Icon = category.icon;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Icon size={40} className="text-neutral-700" />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{category.label}</div>
          <div className="text-neutral-500">
            This place is a {category.label}
          </div>
        </div>
      </div>
    </div>
  );
};
