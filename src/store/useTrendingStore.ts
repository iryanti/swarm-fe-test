import { create } from "zustand";

interface Trending {
  title: string;
  creator: string;
  main: string;
  thumbs: [];
  count: number;
    avatar: string;

}

interface TrendingStore {
  collections: Trending[];
  setCollections: (data: Trending[]) => void;
  fetchTrendingCollections: () => Promise<void>;
}

export const useTrendingStore = create<TrendingStore>((set) => ({
  collections: [],
  setCollections: (data) => set({ collections: data }),
  fetchTrendingCollections: async () => {
    const res = await fetch("/data/trending.json");
    const data = await res.json();
    set({ collections: data });
  },
}));
