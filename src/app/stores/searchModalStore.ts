import { create } from "zustand";

interface Store {
  searchModal: {
    isOpen: boolean;
  };
  handleSeachModalChange: (val: boolean) => void;
}

export const useSearchModalStore = create<Store>()((set) => ({
  searchModal: {
    isOpen: false,
  },
  handleSeachModalChange: (val) => {
    set({ searchModal: { isOpen: val } });
  },
}));
