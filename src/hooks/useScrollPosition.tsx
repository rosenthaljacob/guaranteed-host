import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updatePosition = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
