import { ArrowRight } from "lucide-react";
import {useNavigate} from "react-router-dom";

export function CartoonButton({
  label,
  color = "bg-blue-600",
  hasHighlight = true,
  disabled = false,
  className = "",
  onClick,
  to,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (disabled) return;
    onClick?.();

    if(to){
      navigate(to);
    }
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
            className=" absolute top-1/2 left-[-200px] w-8 h-24 bg-white/30
  -translate-x-1/2 -translate-y-1/2 rotate-12
  transition-transform duration-[1000ms] ease-in-out
  group-hover:translate-x-[600px]"
          ></div>
        )}
      </button>
    </div>
  );
}
