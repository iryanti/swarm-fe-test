import { useEffect } from "react";
import { useDiscoverStore } from "../../store/useDiscoverStore";
import DiscoverCard from "../elements/DiscoverCard";

export default function DiscoverMore() {
  const { discoverList, fetchDiscover } = useDiscoverStore();

  useEffect(() => {
    fetchDiscover();
  }, [fetchDiscover]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold">Discover More NFTs</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl">
            Explore new trending NFTs now.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {discoverList.map((item, i) => (
          <DiscoverCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
