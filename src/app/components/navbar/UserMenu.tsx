"use client";
import { FC } from "react";
import { MdMenu } from "react-icons/md";
import * as Popover from "@radix-ui/react-popover";
import { Avatar } from "../ui/Avatar";

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = ({}) => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="flex items-center justify-between w-12 sm:w-20 py-1 h-12 border-[1px] border-slate-300 sm:gap-2 shadow-sm hover:shadow-md transition-shadow rounded-full">
          <MdMenu className="sm:ml-3 grow sm:grow-0" />
          <Avatar src="" className="mr-3" />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="bg-slate-100 shadow-lg transition-all border-[1px] border-slate-300 rounded-lg mt-2 mr-5">
          <div className="py-1 w-24 cursor-pointer">
            <div className="w-full hover:bg-slate-200 py-2 px-5">Login</div>
            <div className="w-full hover:bg-slate-200 py-2 px-5">Sign Up</div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export { UserMenu };
