import { create } from "zustand";

interface Creator {
  id: number;
  rank: number;
  name: string;
  sales: string;
  avatar: string;
}

interface CreatorStore {
  creators: Creator[];
  setCreators: (data: Creator[]) => void;
  fetchCreators: () => Promise<void>;
}

export const useCreatorStore = create<CreatorStore>((set) => ({
  creators: [],
  setCreators: (data) => set({ creators: data }),
  fetchCreators: async () => {
    const res = await fetch("/data/topCreators.json");
    const data = await res.json();
    set({ creators: data });
  },
}));
