interface ImageCardProps {
  srcImage: string;
  alt: string;
  variant?: "big" | "medium" | "small";
}

export default function ImageCard({
  srcImage = "",
  alt = "dummy",
  variant = "medium",
}: ImageCardProps) {
  return (
    <div
      className={`overflow-hidden ${
        variant === "big"
          ? "rounded-[24px]"
          : "w-[80px] h-[80px] rounded-[20px] overflow-hidden"
      }`}
    >
      <img
        src={srcImage}
        alt={alt}
        className={`w-full object-cover rounded-[24px] ${
          variant === "big" ? "h-[280px] md:h-[320px]" : "h-full"
        }`}
      />
    </div>
  );
}
