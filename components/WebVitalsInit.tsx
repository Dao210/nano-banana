'use client';

import { useEffect } from 'react';

export function WebVitalsInit() {
  useEffect(() => {
    // Use requestIdleCallback to initialize without blocking FCP
    const initWebVitals = async () => {
      const { initWebVitals: init } = await import('@/lib/web-vitals');
      init();
    };

    // Use requestIdleCallback if available, otherwise use requestAnimationFrame
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(() => initWebVitals());
      return () => (window as any).cancelIdleCallback(id);
    } else if (typeof window !== 'undefined') {
      const id = (window as any).requestAnimationFrame(() => initWebVitals());
      return () => (window as any).cancelAnimationFrame(id);
    }
  }, []);

  return null;
}
