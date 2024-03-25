import { create } from "zustand";

interface LanguageState {
  language: "english" | "turkish";
  setLanguage: (language: "english" | "turkish") => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: "turkish",
  setLanguage: (language) => set({ language }),
}));
