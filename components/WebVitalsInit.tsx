'use client';

import { useEffect } from 'react';

export function WebVitalsInit() {
  useEffect(() => {
    const timer = setTimeout(async () => {
      const { initWebVitals } = await import('@/lib/web-vitals');
      initWebVitals();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
