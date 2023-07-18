import { create } from 'zustand';

interface Store {
  popover: {
    isOpen: boolean;
  };
  login: {
    isOpen: boolean;
  };
  register: {
    isOpen: boolean;
  };
  setOpenLogin: (val: boolean) => void;
  setOpenRegister: (val: boolean) => void;
  setPopoverOpen: (val: boolean) => void;
}

export const useStore = create<Store>()((set) => ({
  popover: {
    isOpen: false,
  },
  login: {
    isOpen: false,
  },
  register: {
    isOpen: false,
  },
  setOpenLogin: (val) => {
    set({ popover: { isOpen: true } });
    setTimeout(() => {
      set({ login: { isOpen: val }, register:{isOpen:false} });
    }, 10); 
  },
  setOpenRegister: (val) => {
    set({
      popover: { isOpen: true },
      login: { isOpen: false },
      register: { isOpen: val },
    });
  },
  setPopoverOpen: (val) => set({ popover: { isOpen: val } }),
}));

// include settimeout if the popover is not darkened while dialog is open
