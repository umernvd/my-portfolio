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
      syncTouch: true,
      syncTouchLerp: 0.1,
      lerp: 0.1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
