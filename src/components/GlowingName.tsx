import React, { useRef, useEffect } from "react";

interface GlowingNameProps {
  text: string;
  className?: string;
}

export function GlowingName({ text, className = "" }: GlowingNameProps) {
  const textRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const svgText = textRef.current;
    if (!svgText) return;

    const svg = svgText.ownerSVGElement;
    if (!svg) return;

    // Get the radial gradient element from the <defs>
    const gradient = svg.querySelector(
      "#shine-gradient"
    ) as SVGRadialGradientElement | null;

    if (!gradient) return;

    const handleMove = (e: MouseEvent) => {
      // Get the position and dimensions of the text element
      const rect = svgText.getBoundingClientRect();

      // Calculate the cursor's X and Y position relative to the text
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Convert these coordinates to percentages of the text's width and height
      const percentX = x / rect.width;
      const percentY = y / rect.height;

      // Update the center of the radial gradient (cx, cy) to follow the cursor
      gradient.setAttribute("cx", `${percentX * 100}%`);
      gradient.setAttribute("cy", `${percentY * 100}%`);
    };

    // Listen for mouse movement on the entire window
    window.addEventListener("mousemove", handleMove);

    // Cleanup function to remove the global listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <svg
      className={`block w-full h-[2.5em] ${className}`}
      viewBox="0 0 700 80"
      fill="none"
    >
      <defs>
        {/* Switched to a radial gradient for a 2D directional glow */}
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
