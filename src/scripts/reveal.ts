const revealItems = Array.from(
  document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-lines]'),
);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!('IntersectionObserver' in window) || prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add('is-in'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px',
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

const header = document.querySelector<HTMLElement>('[data-header]');

if (header) {
  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}
