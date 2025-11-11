interface CategoriesCardProps {
  image: string;
  name: string;
  icon: string;
}

export default function CategoriesCard({
  image,
  name,
  icon,
}: CategoriesCardProps) {
  return (
    <div className="bg-[#3B3B3B] rounded-[20px] overflow-hidden hover:-translate-y-1 hover:shadow-lg transition cursor-pointer">
      <div className="relative w-full h-[180px] md:h-[200px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center img-blur">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-10 h-10 md:w-12 md:h-12 filter invert brightness-0 contrast-200"
          />
        </div>
      </div>
      <div className="bg-[#2B2B2B] px-4 py-3">
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
}
