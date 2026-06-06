interface DefLabLogoProps {
  className?: string;
  height?: number;
  variant?: "default" | "white";
}

export function DefLabLogo({ className = "", height = 48, variant = "default" }: DefLabLogoProps) {
  const labColor = variant === "white" ? "#ffffff" : "#666666";
  const bgColor = variant === "white" ? "rgba(255,255,255,0.12)" : "#ffffff";

  return (
    <svg
      width={height}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="16" fill={bgColor} />
      <text
        x="50"
        y="46"
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="34"
        fill="#FF6600"
      >
        DEF
      </text>
      <text
        x="50"
        y="82"
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="34"
        fill={labColor}
      >
        LaB
      </text>
    </svg>
  );
}
