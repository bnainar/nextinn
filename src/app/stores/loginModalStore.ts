import { create } from "zustand";

interface Store {
  userMenuDropdown: {
    isOpen: boolean;
  };
  loginModal: {
    isOpen: boolean;
  };

  handleLoginModalChange: (val: boolean) => void;
  handleUserMenuDropdownChange: (val: boolean) => void;
}

export const useLoginStore = create<Store>()((set) => ({
  userMenuDropdown: {
    isOpen: false,
  },
  loginModal: {
    isOpen: false,
  },

  handleLoginModalChange: (val) => {
    set({ userMenuDropdown: { isOpen: true } });
    setTimeout(() => {
      set({ loginModal: { isOpen: val } });
    }, 10);
  },

  handleUserMenuDropdownChange: (val) =>
    set({ userMenuDropdown: { isOpen: val } }),
}));

// include settimeout if the popover is not darkened while dialog is open
