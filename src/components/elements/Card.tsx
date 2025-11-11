interface CardProps {
  imageSrc: string;
  title: string;
  description?: string;
  price?: string;
  creatorName?: string;
  creatorAvatar?: string;
  onButtonClick?: () => void;
  buttonText?: string;
}

export default function Card({
  imageSrc,
  title,
  description,
  creatorName,
  creatorAvatar,
}: CardProps) {
  return (
    <div className="bg-white  rounded-[20px] shadow-md overflow-hidden w-full max-w-[500px] transition hover:shadow-lg hover:-translate-y-1">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[400px] object-cover"
      />

      <div className="p-4 flex flex-col gap-3 bg-secondary">
        <h3 className="text-lg font-semibold truncate">{title}</h3>

        {description && (
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        )}

        {creatorName && (
          <div className="flex items-center gap-3 mt-2">
            {creatorAvatar && (
              <img
                src={creatorAvatar}
                alt={creatorName}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <p className="text-sm font-medium">
              {creatorName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
