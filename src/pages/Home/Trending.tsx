import Avatar from "../../components/elements/Avatar";
import ImageCard from "../../components/elements/ImageCard";
import { useTrendingStore } from "../../store/useTrendingStore";
import { useEffect } from "react";

export default function Trending() {
  const { collections, fetchTrendingCollections } = useTrendingStore();

  useEffect(() => {
    fetchTrendingCollections();
  }, [fetchTrendingCollections]);
  
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold">Trending Collections</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Checkout our weekly updated trending collections.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <ImageCard srcImage={item.main} alt={item.title} variant={"big"} />
            <div className="flex items-center gap-3">
              {item.thumbs.map((thumb, i) => (
                <ImageCard
                  key={i}
                  srcImage={thumb}
                  alt={`${item.title} ${i + 1}`}
                  variant={"small"}
                />
              ))}
              <div className="w-[80px] h-[80px] rounded-[20px] bg-[#A259FF] flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {item.count}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <Avatar srcImage={item.avatar} creatorName={item.creator} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
