import { useEffect } from "react";

/**
 * Sauti Aziz motion system — restrained, performance-safe.
 * Implements the architecture spec: hero timeline, scroll reveals,
 * subtle parallax, reduced-motion respect, single RAF scroll loop.
 */
export function useMotionSystem() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const root = document.documentElement;

    // Auto-tag inner targets of every motion section as `.reveal` with stagger
    const sections = document.querySelectorAll<HTMLElement>(
      "main section, .reveal-section"
    );
    sections.forEach((section) => {
      const targets = section.querySelectorAll<HTMLElement>(
        ".section-kicker, h2, h3, p, .card, .timeline-item, .member-card, article, figure, li, [data-stagger]"
      );
      targets.forEach((el, i) => {
        if (!el.classList.contains("no-reveal")) {
          el.classList.add("reveal");
          el.style.transitionDelay = `${Math.min(i * 70, 560)}ms`;
        }
      });
    });

    if (prefersReduced) {
      root.classList.add("reduced-motion");
      document
        .querySelectorAll<HTMLElement>("[data-reveal], .reveal, .hero-anim")
        .forEach((el) => el.classList.add("is-visible", "is-in"));
      return;
    }

    // --- Scroll reveals -----------------------------------------------------
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    document
      .querySelectorAll<HTMLElement>("[data-reveal], .reveal")
      .forEach((el) => observer.observe(el));

    // --- Hero timeline ------------------------------------------------------
    const heroEls = Array.from(
      document.querySelectorAll<HTMLElement>(".hero-anim")
    );
    const heroTimers: number[] = [];
    heroEls.forEach((el, i) => {
      const delay = 120 + i * 160;
      heroTimers.push(
        window.setTimeout(() => el.classList.add("is-in"), delay)
      );
    });

    // --- Parallax (single RAF loop) ----------------------------------------
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    let latestY = 0;
    let ticking = false;
    const update = () => {
      for (const el of parallaxEls) {
        const k = parseFloat(el.dataset.parallax || "0.15");
        el.style.transform = `translate3d(0, ${latestY * k}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      latestY = window.scrollY || window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    if (parallaxEls.length) {
      window.addEventListener("scroll", onScroll, { passive: true });
      update();
    }

    return () => {
      observer.disconnect();
      heroTimers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
