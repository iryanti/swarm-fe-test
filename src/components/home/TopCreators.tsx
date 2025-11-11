import { useEffect } from "react";
import { useCreatorStore } from "../../store/useCreatorStore";
import CreatorCard from "../elements/CreatorCard";

export default function TopCreators() {
  const { creators, fetchCreators } = useCreatorStore();

  useEffect(() => {
    fetchCreators();
  }, [fetchCreators]);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Top Creators</h2>
      <p className="text-gray-400 text-sm md:text-base max-w-2xl">
        Discover the top creators on the NFT marketplace.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {creators.map((creator) => (
          <CreatorCard {...creator} />
        ))}
      </div>
    </section>
  );
}
