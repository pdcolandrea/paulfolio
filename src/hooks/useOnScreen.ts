import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';

export default function useOnScreen(ref: MutableRefObject<any>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry?.isIntersecting ?? false),
      { threshold: 0.5 }
    );

    if (observer && ref.current) {
      observer.observe(ref.current);
    }

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
