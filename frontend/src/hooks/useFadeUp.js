// ============================================================
//  hooks/useFadeUp.js
//  Attach to any container — all .fade-up children animate in
// ============================================================
import { useEffect } from "react";

export function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    // Observe all .fade-up elements in the document
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
