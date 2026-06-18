import { useEffect, useRef, useState } from 'react';

export function useScoreAnimation(depValue: number | null | undefined) {
  const [flash, setFlash] = useState(false);
  const prevRef = useRef(depValue);

  useEffect(() => {
    if (depValue !== null && depValue !== undefined && prevRef.current !== depValue) {
      setFlash(true);
      const timer = setTimeout(() => setFlash(false), 1200);
      prevRef.current = depValue;
      return () => clearTimeout(timer);
    }
  }, [depValue]);

  return flash;
}
