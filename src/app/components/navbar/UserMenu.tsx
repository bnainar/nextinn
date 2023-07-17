"use client";
import { FC } from "react";
import { MdMenu } from "react-icons/md";
import * as Popover from "@radix-ui/react-popover";
import { Avatar } from "../ui/Avatar";
import { Dialog, DialogTrigger, DialogContent } from "../ui/Dialog";

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
          <div className="w-24 py-1">
            <Dialog>
              <DialogTrigger className="w-full hover:bg-slate-200 py-2 pl-4 text-left">
                Sign Up
              </DialogTrigger>
              <DialogContent title="Sign Up">Dialog Content</DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className="w-full hover:bg-slate-200 py-2 pl-4 text-left">
                Login
              </DialogTrigger>
              <DialogContent title="Login">Dialog Content</DialogContent>
            </Dialog>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export { UserMenu };
