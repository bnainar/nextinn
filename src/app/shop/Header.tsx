import Link from "next/link";
import { FC } from "react";
import { MdBeenhere } from "react-icons/md";

interface RentHeaderProps {}

const RentHeader: FC<RentHeaderProps> = ({}) => {
  return (
    <div className="w-full bg-slate-100 py-5 shadow-sm h-20 border-b-[1px] border-slate-300">
      <div className="flex flex-row justify-between items-start my-auto h-10 px-6 md:px-16">
        <Link href="/">
          <div className="hidden sm:flex flex-row items-center">
            <MdBeenhere
              className="hidden sm:block h-10 w-10 text-purple-600"
              aria-label="NextInn logo"
            />
            <div className=" hidden lg:block text-purple-600 text-2xl font-semibold pl-2">
              NextInn_
            </div>
          </div>
        </Link>
        <div className="flex flex-row justify-end items-center gap-5"></div>
      </div>
    </div>
  );
};

export { RentHeader };
