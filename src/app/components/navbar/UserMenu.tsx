"use client";
import { FC } from "react";
import { MdMenu } from "react-icons/md";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Avatar } from "../ui/Avatar";
import { Dialog, DialogTrigger, DialogContent } from "../ui/Dialog";
import { LoginForm } from "../forms/LoginForm";
import { signOut, useSession } from "next-auth/react";
import { useLoginStore } from "@/app/stores/loginModalStore";
import Link from "next/link";

interface UserMenuProps {}

export const UserMenu: FC<UserMenuProps> = ({}) => {
  // converting login and usermenu to controlled compeonents
  const userMenuDropdown = useLoginStore((s) => s.userMenuDropdown);
  const handleUserMenuDropdownChange = useLoginStore(
    (s) => s.handleUserMenuDropdownChange
  );

  const loginModal = useLoginStore((s) => s.loginModal);
  const handleLoginModalChange = useLoginStore((s) => s.handleLoginModalChange);

  const { data: session } = useSession();
  return (
    <DropdownMenu.Root
      open={userMenuDropdown.isOpen}
      onOpenChange={handleUserMenuDropdownChange}
    >
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center justify-between w-12 sm:w-20 py-1 h-12 border-[1px] border-slate-300 active:border-slate-500 sm:gap-2 shadow-sm hover:shadow-md transition-shadow rounded-full">
          <MdMenu className="sm:ml-3 grow sm:grow-0" />
          <Avatar src={session?.user?.image} className="mr-3" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-slate-100 shadow-lg transition-all border-[1px] border-slate-300 rounded-lg mt-2 mr-5">
          <div className="w-auto py-1">
            {session ? (
              <>
                <Link href="/trips">
                  <MenuItem>My Trips</MenuItem>
                </Link>
                <Link href="/favorites">
                  <MenuItem>My Favs</MenuItem>
                </Link>
                <Link href="/properties">
                  <MenuItem>My Listings</MenuItem>
                </Link>
                <Link href="/reservations">
                  <MenuItem>Manage Reservations</MenuItem>
                </Link>
                <hr />
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
              </>
            ) : (
              <Dialog
                open={loginModal.isOpen}
                onOpenChange={handleLoginModalChange}
              >
                <DialogTrigger className="w-20 hover:bg-slate-200 py-2 px-4 text-left cursor-pointer">
                  <span>Login</span>
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

interface MenuItemProps {
  children: React.ReactNode;
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
