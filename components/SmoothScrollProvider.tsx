import { useEffect } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      autoResize: true,
      anchors: true,
      lerp: 0.08,
      wheelMultiplier: 0.9,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
