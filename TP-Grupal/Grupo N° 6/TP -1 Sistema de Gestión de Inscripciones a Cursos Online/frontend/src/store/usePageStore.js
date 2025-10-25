import { create } from "zustand";

export const usePageStore = create((set) => ({
  page: "auth",
  setPage: (newPage) => set({ page: newPage }),
}));
