"use client";
import { FC } from "react";
import { MdMenu } from "react-icons/md";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Avatar } from "../ui/Avatar";
import { Dialog, DialogTrigger, DialogContent } from "../ui/Dialog";
import { LoginForm } from "../forms/LoginForm";
import { signOut, useSession } from "next-auth/react";
// import { useStore } from "@/app/stores";

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = ({}) => {
  // const { login, popover, setOpenLogin, setPopoverOpen } = useStore((s) => s);
  const { data: session } = useSession();
  console.log(session);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex items-center justify-between w-12 sm:w-20 py-1 h-12 border-[1px] border-slate-300 sm:gap-2 shadow-sm hover:shadow-md transition-shadow rounded-full">
          <MdMenu className="sm:ml-3 grow sm:grow-0" />
          <Avatar src={session?.user?.image} className="mr-3" />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-slate-100 shadow-lg transition-all border-[1px] border-slate-300 rounded-lg mt-2 mr-5">
          <div className="w-auto py-1">
            {session ? (
              <>
                <MenuItem>My Trips</MenuItem>
                <MenuItem>My Favs</MenuItem>
                <MenuItem>My Listings</MenuItem>
                <MenuItem>My Reservations</MenuItem>
                <hr />
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
              </>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <MenuItem>Login</MenuItem>
                </DialogTrigger>
                <DialogContent title="Login / Sign Up">
                  <LoginForm />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export { UserMenu };

interface MenuItemProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <div
      className="w-full hover:bg-slate-200 py-2 px-4 text-left cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { MenuItem };
