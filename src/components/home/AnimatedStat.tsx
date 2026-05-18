'use client';

import { useEffect, useRef, useState } from 'react';

import styles from './StatsBar.module.css';

type AnimatedStatProps = {
  value: number;
  suffix: string;
};

/**
 * Renders the final value on server + first client paint (avoids hydration mismatch),
 * then counts up after the section scrolls into view.
 */
export default function AnimatedStat({ value, suffix }: AnimatedStatProps) {
  const [display, setDisplay] = useState(value);
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        const duration = 1800;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(Math.floor(value * progress));
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };

        setDisplay(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={spanRef} className={styles.count}>
      {display}
      {suffix}
    </span>
  );
}
