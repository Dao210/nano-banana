'use client';

import { lazy, Suspense, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
  [key: string]: any;
}

// Icon cache for dynamic imports
const iconCache = new Map<string, React.ComponentType<any>>();

// Loading fallback
const IconLoader = ({ size = 24, className }: { size?: number; className?: string }) => (
  <Loader2 size={size} className={cn('animate-spin', className)} />
);

/**
 * Dynamic icon loader with tree-shaking support
 *
 * This component dynamically imports icons from lucide-react,
 * ensuring only used icons are included in the bundle.
 *
 * @example
 * <Icon name="star" size={24} className="text-yellow-500" />
 * <Icon name="arrow-right" size={18} />
 */
export const Icon = forwardRef<any, IconProps>(
  ({ name, size = 24, className, ...props }, ref) => {
    // Convert kebab-case or camelCase to PascalCase
    const iconName = name
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    // Get or create dynamic icon component
    if (!iconCache.has(iconName)) {
      const DynamicIcon = lazy(() =>
        import('lucide-react').then(mod => ({
          default: mod[iconName as keyof typeof mod] as React.ComponentType<any>
        }))
      );

      iconCache.set(iconName, DynamicIcon);
    }

    const IconComponent = iconCache.get(iconName)!;

    return (
      <Suspense fallback={<IconLoader size={size} className={className} />}>
        <IconComponent
          ref={ref}
          size={size}
          className={className}
          {...props}
        />
      </Suspense>
    );
  }
);

Icon.displayName = 'Icon';

/**
 * Preload icons for better performance
 *
 * Use this in parent components to preload icons that will be needed soon.
 *
 * @example
 * useEffect(() => {
 *   preloadIcons(['star', 'heart', 'bookmark']);
 * }, []);
 */
export async function preloadIcons(names: string[]) {
  const promises = names.map(async (name) => {
    const iconName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    if (!iconCache.has(iconName)) {
      const DynamicIcon = lazy(() =>
        import('lucide-react').then(mod => ({
          default: mod[iconName as keyof typeof mod] as React.ComponentType<any>
        }))
      );

      iconCache.set(iconName, DynamicIcon);
    }
  });

  await Promise.all(promises);
}

/**
 * Clear icon cache (useful for testing or memory management)
 */
export function clearIconCache() {
  iconCache.clear();
}

export default Icon;
