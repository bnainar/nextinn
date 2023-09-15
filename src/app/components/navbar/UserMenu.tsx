"use client";
import { FC } from "react";
import { MdMenu } from "react-icons/md";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Avatar } from "../ui/Avatar";
import { Dialog, DialogTrigger, DialogContent } from "../ui/Dialog";
import { LoginForm } from "../forms/LoginForm";
// import { useStore } from "@/app/stores";

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = ({}) => {
  // const { login, popover, setOpenLogin, setPopoverOpen } = useStore((s) => s);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex items-center justify-between w-12 sm:w-20 py-1 h-12 border-[1px] border-slate-300 sm:gap-2 shadow-sm hover:shadow-md transition-shadow rounded-full">
          <MdMenu className="sm:ml-3 grow sm:grow-0" />
          <Avatar src="" className="mr-3" />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-slate-100 shadow-lg transition-all border-[1px] border-slate-300 rounded-lg mt-2 mr-5">
          <div className="w-24 py-1">
            <Dialog>
              <DialogTrigger className="w-full hover:bg-slate-200 py-2 pl-4 text-left">
                Login
              </DialogTrigger>
              <DialogContent title="Login / Sign Up">
                <LoginForm />
              </DialogContent>
            </Dialog>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export { UserMenu };
