interface CreatorCardProps {
  rank: number;
  name: string;
  sales: string;
  avatar: string;
}

export default function CreatorCard({
  rank,
  name,
  sales,
  avatar,
}: CreatorCardProps) {
  return (
    <div
      key={rank}
      className="relative flex flex-col items-center justify-center bg-[#3B3B3B] rounded-[20px] p-6 hover:-translate-y-1 hover:shadow-lg transition"
    >
      <span className="absolute top-3 left-3 bg-[#2B2B2B] text-gray-300 w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full">
        {rank}
      </span>
      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>

      <p className="text-gray-400 text-sm mt-1">
        Total Sales:{" "}
        <span className="text-white font-medium">{sales}</span>
      </p>
    </div>
  );
}
