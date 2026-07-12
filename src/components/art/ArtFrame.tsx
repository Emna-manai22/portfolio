import { useId, type ReactNode } from "react";

/**
 * Shared canvas for the project illustrations: a brand-hued gradient field,
 * a faint dot-grid texture, and a slot for a hand-drawn motif on top.
 * Everything is driven by the site's CSS variables so it re-themes for
 * free between light and dark mode instead of shipping baked-in photos.
 */
export function ArtFrame({ children }: { children: ReactNode }) {
  const uid = useId();
  const gradId = `art-grad-${uid}`;
  const dotId = `art-dot-${uid}`;

  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--brand-deep)" />
          <stop offset="100%" stopColor="var(--brand)" />
        </linearGradient>
        <pattern id={dotId} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="white" opacity="0.14" />
        </pattern>
      </defs>
      <rect width="400" height="250" fill={`url(#${gradId})`} />
      <rect width="400" height="250" fill={`url(#${dotId})`} />
      <circle cx="300" cy="60" r="100" fill={`url(#${gradId})`} opacity="0.08" />
      {children}
    </svg>
  );
}
