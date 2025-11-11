import Avatar from "./Avatar";

interface DiscoverCardProps {
  image: string;
  title: string;
  creatorName: string;
  creatorAvatar: string;
  price: string;
  highestBid: string;
}


export default function DiscoverCard({
  image,
  title,
  creatorName,
  creatorAvatar,
  price,
  highestBid,
}: DiscoverCardProps) {
  return (
    <div className="bg-[#3B3B3B] rounded-[24px] overflow-hidden w-full max-w-[340px] flex flex-col shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <div className="w-full h-[260px] md:h-[280px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 pt-5 pb-6 flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <Avatar srcImage={creatorAvatar} creatorName={creatorName}/>
        <div className="flex justify-between gap-6 text-xs md:text-sm mt-2">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Price</span>
            <span className="text-white font-medium">{price}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Highest Bid</span>
            <span className="text-white font-medium">{highestBid}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
