import { useState, useEffect } from "react";

export const useVisibleCount = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 1024) {
        setCount(1); // below lg → 1 card
      } else if (window.innerWidth < 1280) {
        setCount(2); // lg to just before xl → 2 cards
      } else {
        setCount(3); // xl and above → 3 cards
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return count;
};
