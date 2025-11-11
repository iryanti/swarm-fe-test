import { create } from "zustand";

interface Discover {
  image: string;
  title: string;
  creatorName: string;
  creatorAvatar: string;
  price: string;
  highestBid: string;
}

interface DiscoverStore {
  discoverList: Discover[];
  setDiscover: (data: Discover[]) => void;
  fetchDiscover: () => Promise<void>;
}

export const useDiscoverStore = create<DiscoverStore>((set) => ({
  discoverList: [],
  setDiscover: (data) => set({ discoverList: data }),
  fetchDiscover: async () => {
    const res = await fetch("/data/discover.json");
    const data = await res.json();
    set({ discoverList: data });
  },
}));
