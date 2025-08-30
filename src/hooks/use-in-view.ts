import { useEffect, useRef, useState } from "react";

// Simple IntersectionObserver hook for reveal-on-scroll animations
export default function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Trigger once
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15, ...(options ?? {}) }
    );

    observer.observe(node);
    return () => {
      try {
        if (node) observer.unobserve(node);
      } catch {}
    };
  }, [options]);

  return { ref, inView } as const;
}
