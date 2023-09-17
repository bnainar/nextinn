import { FC } from "react";
import { MdBeenhere } from "react-icons/md";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { NewListingModal } from "../listings/create/NewListingModal";
import { Dialog, DialogTrigger, DialogContent } from "../ui/Dialog";

import Link from "next/link";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  // const setOpenLogin = useStore((s) => s.setOpenLogin);
  return (
    <div className="w-full bg-slate-100 py-5 shadow-sm h-20 border-b-[1px] border-slate-300">
      <div className="flex flex-row justify-between items-center my-auto h-10 px-6 md:px-16">
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
        <SearchBar />
        <div className="flex flex-row justify-end items-center gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <div className="hidden min-w-fit sm:block rounded-full hover:bg-slate-200 px-3 py-1 cursor-pointer">
                Become a Host
              </div>
            </DialogTrigger>
            <DialogContent title="Host your Home">
              <NewListingModal />
            </DialogContent>
          </Dialog>
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export { NavBar };
