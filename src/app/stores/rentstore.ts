import { create } from "zustand";

type Store = {
  formData: {
    category: string;
    location: any;
    guestsLimit: number;
    roomCount: number;
    bathCount: number;
    imageSrc: string;
    price: number;
    title: string;
    desc: string;
  };
  setFormData: (data: any) => void;
};
const useRentFormStore = create<Store>((set) => ({
  formData: {
    category: "",
    location: null,
    guestsLimit: 1,
    roomCount: 1,
    bathCount: 1,
    imageSrc: "",
    price: 1,
    title: "",
    desc: "",
  },
  setFormData: (data: { key: string; value: any }) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
}));

export default useRentFormStore;
