import { FC } from "react";
import { MdOutlineSearch } from "react-icons/md";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  return (
    <div className="flex pb-1 flex-row items-center justify-between text-sm transition-all w-full md:w-auto pr-5 pl-2 h-12 mr-1 rounded-3xl border-[1px] border-slate-300 shadow-sm hover:shadow-md cursor-pointer">
      <div className="px-3 font-semibold text-ellipsis overflow-hidden">
        Anywhere
      </div>
      <div className="px-3 font-semibold truncate text-ellipsis overflow-hidden border-x-2 border-slate-300">
        Any week
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="my-auto px-3 text-slate-500 text-ellipsis overflow-hidden">
          Add guests
        </span>
        <div className="rounded-full bg-purple-600 text-white p-2 -mr-3 mt-1">
          <MdOutlineSearch fontSize="1.25em" />
        </div>
      </div>
    </div>
  );
};

export { SearchBar };
