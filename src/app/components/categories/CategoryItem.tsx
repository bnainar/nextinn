"use client";
import { FC, useCallback } from "react";
import { Category } from "./categories";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import clsx from "clsx";

interface CategoryItemProps {
  data: Category;
  selected?: boolean;
}

const CategoryItem: FC<CategoryItemProps> = ({
  data: { icon: Icon, label },
  selected,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const styles = {
    t: "text-[#000000] border-[#000000]",
    f: "text-neutral-500 hover:text-neutral-800 border-transparent hover:border-neutral-400",
  };
  const handleClick = useCallback(() => {
    let query: any = {};
    if (searchParams) {
      const params = searchParams.toString();
      query = queryString.parse(params);
    }
    query = { ...query, category: label };
    // delete selection when clicking the selected item
    // alternative: have a default "All" category instead of "unselecting"
    if (searchParams?.get("category") === label) delete query.category;
    const newURL = queryString.stringifyUrl(
      {
        url: "/",
        query,
      },
      { skipNull: true }
    );
    router.push(newURL);
  }, [searchParams, label, router]);
  return (
    <div
      onClick={handleClick}
      className={clsx(
        `flex flex-col gap-2 items-center pb-4 border-b-2 cursor-pointer active:scale-90 transition`,
        styles[selected ? "t" : "f"]
      )}
    >
      <Icon size={25} />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export { CategoryItem };
