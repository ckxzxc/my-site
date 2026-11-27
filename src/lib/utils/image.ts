// src/utils/images.ts
import type { ImageMetadata } from 'astro';

const images = import.meta.glob<ImageMetadata>(
  '/src/assets/images/**/*.{avif,gif,jpeg,jpg,png,webp}',
  {
    eager: true,
    import: 'default',
  }
);
export function getImage(path?: string | null): ImageMetadata | null {
  if (!path) return null;
  return images[path] ?? null;
}