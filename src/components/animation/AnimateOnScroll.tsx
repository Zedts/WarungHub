"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}
