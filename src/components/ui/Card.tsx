import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  const hoverStyles = hover
    ? "transition-all duration-300 hover:border-power-red hover:-translate-y-1"
    : "";

  return (
    <div
      className={`bg-dark-grey border border-border-grey rounded-lg p-6 md:p-8 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
