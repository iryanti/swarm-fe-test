interface AvatarProps {
  creatorName: string;
  srcImage: string;
}

export default function Avatar({
  creatorName = "",
  srcImage = "",
}: AvatarProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <img
        src={srcImage}
        alt={creatorName}
        className="w-6 h-6 rounded-full object-cover"
      />
      {creatorName && <span>{creatorName}</span>}
    </div>
  );
}
