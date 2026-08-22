"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-20 right-6 z-30 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-card/90 text-primary shadow-[0_4px_15px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/20 hover:text-white animate-fadeIn cursor-pointer"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

