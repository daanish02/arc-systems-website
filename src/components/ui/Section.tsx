import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  divider?: boolean;
  fullHeight?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  divider = false,
  fullHeight = false,
}: SectionProps) {
  const heightClass = fullHeight ? "min-h-screen" : "";
  
  return (
    <>
      {divider && (
        <div className="border-t border-border-grey" />
      )}
      <section id={id} className={`section-padding bg-black ${heightClass} ${className}`}>
        <div className="container-custom h-full">{children}</div>
      </section>
    </>
  );
}
