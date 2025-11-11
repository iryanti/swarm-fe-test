interface ButtonProps {
  text: string;
  iconSrc?: string;              // optional image inside button
  width?: string;                // e.g. '200px' or '100%'
  height?: string;               // e.g. '60px'
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  iconSrc,
  width = "auto",
  height = "60px",
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#A259FF] hover:bg-[#8B3DFF] text-white font-semibold transition",
    secondary:
      "bg-transparent border border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white transition",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-[20px] ${variants[variant]} ${className}`}
      style={{ width, height }}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt="icon"
          className="w-5 h-5 object-contain"
        />
      )}
      <span>{text}</span>
    </button>
  );
}
