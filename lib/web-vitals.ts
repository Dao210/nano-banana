/**
 * Web Vitals Monitoring
 *
 * This module provides comprehensive Web Vitals monitoring using
 * the web-vitals library. It tracks Core Web Vitals and sends
 * them to analytics platforms.
 *
 * Core Web Vitals:
 * - LCP (Largest Contentful Paint): Loading performance
 * - FID (First Input Delay): Interactivity
 * - CLS (Cumulative Layout Shift): Visual stability
 * - FCP (First Contentful Paint): First paint
 * - TTFB (Time to First Byte): Server response time
 */

import { Metric, onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

/**
 * Report metric to analytics
 */
function reportMetric(metric: Metric) {
  const { name, value, rating, delta } = metric;

  // Send to Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
      custom_map: {
        metric_id: metric.id,
        metric_value: value,
        metric_delta: delta,
        metric_rating: rating,
      },
    });
  }

  // Send to Vercel Analytics
  if (typeof window !== 'undefined' && (window as any).va) {
    (window as any).va('event', {
      name,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      label: metric.id,
    });
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    const ratingEmoji = {
      good: '✅',
      'needs-improvement': '⚠️',
      poor: '❌',
    }[rating];

    console.log(
      `[Web Vitals] ${ratingEmoji} ${name}: ${value.toFixed(2)} ${name === 'CLS' ? '' : 'ms'} (${rating})`
    );
  }
}

/**
 * Initialize Web Vitals monitoring
 *
 * Call this function in your app's layout or root component
 * to start monitoring all Core Web Vitals.
 *
 * @example
 * // app/layout.tsx
 * import { initWebVitals } from '@/lib/web-vitals';
 *
 * export function RootLayout({ children }) {
 *   useEffect(() => {
 *     initWebVitals();
 *   }, []);
 *
 *   return <html>{children}</html>;
 * }
 */
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // LCP (Largest Contentful Paint)
  onLCP(reportMetric);

  // FID (First Input Delay)
  onFID(reportMetric);

  // CLS (Cumulative Layout Shift)
  onCLS(reportMetric);

  // FCP (First Contentful Paint)
  onFCP(reportMetric);

  // TTFB (Time to First Byte)
  onTTFB(reportMetric);
}

/**
 * Get all metrics at once (useful for debugging)
 *
 * @example
 * const metrics = await getAllMetrics();
 * console.log(metrics);
 */
export async function getAllMetrics(): Promise<Metric[]> {
  return new Promise((resolve) => {
    const metrics: Metric[] = [];

    const collectMetric = (metric: Metric) => {
      metrics.push(metric);

      if (metrics.length === 5) {
        resolve(metrics);
      }
    };

    if (typeof window === 'undefined') {
      resolve([]);
      return;
    }

    onLCP(collectMetric);
    onFID(collectMetric);
    onCLS(collectMetric);
    onFCP(collectMetric);
    onTTFB(collectMetric);
  });
}

/**
 * Check if metrics meet thresholds
 *
 * @example
 * const assessment = assessMetrics(metrics);
 * console.log(assessment.lcp); // { rating: 'good', value: 1200 }
 */
export function assessMetrics(metrics: Metric[]) {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
  };

  const assessment: Record<string, { rating: string; value: number }> = {};

  metrics.forEach((metric) => {
    const threshold = thresholds[metric.name as keyof typeof thresholds];

    if (threshold) {
      let rating: string;

      if (metric.value <= threshold.good) {
        rating = 'good';
      } else if (metric.value <= threshold.poor) {
        rating = 'needs-improvement';
      } else {
        rating = 'poor';
      }

      assessment[metric.name] = {
        rating,
        value: metric.value,
      };
    }
  });

  return assessment;
}

/**
 * Create a performance report
 *
 * @example
 * const report = await createPerformanceReport();
 * console.log(report.summary);
 */
export async function createPerformanceReport() {
  const metrics = await getAllMetrics();
  const assessment = assessMetrics(metrics);

  const summary = {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    metrics: metrics.reduce((acc, metric) => {
      acc[metric.name] = {
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      };
      return acc;
    }, {} as Record<string, any>),
    assessment,
    overall: Object.values(assessment).every((m) => m.rating === 'good')
      ? 'excellent'
      : Object.values(assessment).every((m) => m.rating !== 'poor')
      ? 'good'
      : 'needs-improvement',
  };

  return summary;
}

/**
 * Performance monitoring component
 *
 * Use this component to automatically initialize Web Vitals monitoring
 * and display performance metrics in development mode.
 *
 * @example
 * import { PerformanceMonitor } from '@/lib/web-vitals';
 *
 * export default function Layout({ children }) {
 *   return (
 *     <>
 *       <PerformanceMonitor />
 *       {children}
 *     </>
 *   );
 * }
 */
export function PerformanceMonitor() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    initWebVitals();

    // Log performance summary on page load
    window.addEventListener('load', async () => {
      setTimeout(async () => {
        const report = await createPerformanceReport();
        console.log('📊 Performance Report:', report);
      }, 1000);
    });
  }

  return null;
}

export default initWebVitals;
