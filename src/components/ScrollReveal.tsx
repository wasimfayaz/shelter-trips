'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    // If browser doesn't support IntersectionObserver, we can just reveal everything immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px', // Triggers slightly before the element enters the viewport
      threshold: 0.05, // Triggers when 5% of the element is visible
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Unobserve to save memory and CPU cycles once animated
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
