import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "white",
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
