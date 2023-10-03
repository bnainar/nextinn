"use client";
import { FC } from "react";
import { SearchTrigger } from "./SearchTrigger";

import { Dialog, DialogTrigger, DialogContent } from "../ui/Dialog";
import { Search } from "./Search";
import { useSearchModalStore } from "@/app/stores/searchModalStore";

interface SearchModalProps {}

export const SearchModal: FC<SearchModalProps> = ({}) => {
  const searchModal = useSearchModalStore((s) => s.searchModal);
  const handleSeachModalChange = useSearchModalStore(
    (s) => s.handleSeachModalChange
  );
  return (
    <Dialog open={searchModal.isOpen} onOpenChange={handleSeachModalChange}>
      <DialogTrigger className="flex pb-1 flex-row items-center justify-between text-sm transition-all w-full sm:w-auto pr-5 pl-2 h-12 mr-1 rounded-3xl border-[1px] border-slate-300 shadow-sm hover:shadow-md cursor-pointer select-none">
        <SearchTrigger />
      </DialogTrigger>
      <DialogContent title="Search listings">
        <Search />
      </DialogContent>
    </Dialog>
  );
};
