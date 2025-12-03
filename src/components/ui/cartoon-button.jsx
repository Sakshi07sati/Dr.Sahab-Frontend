import { ArrowRight } from "lucide-react";

export function CartoonButton({
  label,
  color = "bg-blue-600",
  hasHighlight = true,
  disabled = false,
  className = "",
  onClick,
}) {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  // Detect if user passed w-full
  const isFullWidth = className.includes("w-full");

  return (
    <div
      className={`
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"} 
        ${isFullWidth ? "block w-full" : "inline-block"}
      `}
    >
      <button
        disabled={disabled}
        onClick={handleClick}
        className={`
          relative flex items-center justify-center gap-2
          transition-all duration-150 overflow-hidden group
          ${color}
          hover:shadow-[0_4px_0_0_#000]
          ${
            disabled
              ? "opacity-50 pointer-events-none"
              : "hover:-translate-y-1 active:translate-y-0 active:shadow-none"
          }
          ${className}
        `}
      >
        <span className="relative z-10 whitespace-nowrap">{label}</span>
        <ArrowRight className="w-5 h-5" />

        {hasHighlight && !disabled && (
          <div
            className="absolute top-1/2 left-[-100%] w-16 h-24 bg-white/50 
              -translate-y-1/2 rotate-12 transition-all duration-500 ease-in-out 
              group-hover:left-[200%]"
          ></div>
        )}
      </button>
    </div>
  );
}
