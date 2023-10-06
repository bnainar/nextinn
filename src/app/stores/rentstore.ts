import { create } from "zustand";

export interface ListingFormType {
  category: string | null;
  location: any;
  guestsLimit: number;
  roomCount: number;
  bathCount: number;
  imgURL: string;
  price: number;
  title: string;
  desc: string;
}

type Store = {
  formData: ListingFormType;
  setFormData: (data: any) => void;
  setForm: (data?: ListingFormType) => void;
};

const defaultData = {
  category: null,
  location: null,
  guestsLimit: 1,
  roomCount: 1,
  bathCount: 1,
  imgURL: "",
  price: 1,
  title: "",
  desc: "",
};

const useRentFormStore = create<Store>((set) => ({
  formData: defaultData,
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  setForm: (data) =>
    set({
      formData: data ?? defaultData,
    }),
}));

export default useRentFormStore;
