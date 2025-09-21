import React, { useRef, useEffect, useState } from "react";

interface GlowingNameProps {
  text: string;
  className?: string;
}

export function GlowingName({ text, className = "" }: GlowingNameProps) {
  const textRef = useRef<SVGTextElement>(null);
  const [textWidth, setTextWidth] = useState(700); // Default width

  useEffect(() => {
    const svgText = textRef.current;
    if (!svgText) return;

    // Dynamically measure text width
    const bbox = svgText.getBBox();
    setTextWidth(bbox.width + 20); // Add some padding

    const svg = svgText.ownerSVGElement;
    if (!svg) return;

    const gradient = svg.querySelector(
      "#shine-gradient"
    ) as SVGRadialGradientElement | null;

    if (!gradient) return;

    const handleMove = (e: MouseEvent) => {
      const rect = svgText.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const percentX = x / rect.width;
      const percentY = y / rect.height;
      gradient.setAttribute("cx", `${percentX * 100}%`);
      gradient.setAttribute("cy", `${percentY * 100}%`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [text]);

  return (
    <svg
      className={`block h-[2.5em] overflow-visible ${className}`}
      viewBox={`0 0 ${textWidth} 80`}
      fill="none"
    >
      <defs>
        <radialGradient id="shine-gradient" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#6b7280" />
        </radialGradient>
      </defs>
      <text
        ref={textRef}
        x="0"
        y="50%"
        textAnchor="start"
        dominantBaseline="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="64"
        stroke="url(#shine-gradient)"
        strokeWidth="2.5"
        fill="transparent"
      >
        {text}
      </text>
    </svg>
  );
}
