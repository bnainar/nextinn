import { FC } from "react";
import { Container } from "../ui/Container";
import { MdBeenhere } from "react-icons/md";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <div className="w-full bg-slate-100 py-5 shadow-sm h-20 border-b-[1px] border-slate-300">
      <Container>
        <div className="flex flex-row justify-between items-center my-auto h-10 px-6 md:px-16">
          <div className="hidden sm:flex flex-row items-center">
            <MdBeenhere className="hidden sm:block h-10 w-10 text-purple-600" />
            <div className=" hidden lg:block text-purple-600 text-2xl font-semibold pl-2">
              NextInn_
            </div>
          </div>
          <SearchBar />
          <div className="flex flex-row justify-end items-center gap-5">
            <div className="hidden sm:block rounded-full hover:bg-slate-200 px-3 py-1 cursor-pointer">
              Become a Host
            </div>
            <UserMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export { NavBar };
