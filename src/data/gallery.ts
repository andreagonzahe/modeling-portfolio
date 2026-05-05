import { spreadByCategory } from '../lib/spreadCategories'

export type GalleryItem = {
  file: string
  alt: string
  category: string
}

const baseItems: GalleryItem[] = [
  {
    file: 'dsc-3115.jpg',
    alt: 'Editorial portrait in warm studio light',
    category: 'editorial',
  },
  {
    file: 'dsc-3351.jpg',
    alt: 'Full-length fashion pose on seamless backdrop',
    category: 'studio-fullbody',
  },
  {
    file: 'DSC_0208.JPG',
    alt: 'Natural light portrait with soft expression',
    category: 'natural-portrait',
  },
  {
    file: 'DSC_0375.JPG',
    alt: 'High-contrast beauty close-up',
    category: 'beauty',
  },
  {
    file: 'DSC_4942.JPG',
    alt: 'Outdoor lifestyle shot with open sky',
    category: 'outdoor',
  },
  {
    file: '4R6A9601.JPG',
    alt: 'Evening look with dramatic lighting',
    category: 'evening',
  },
  {
    file: 'IMG_4438.JPG',
    alt: 'Casual street-style moment',
    category: 'lifestyle',
  },
  {
    file: 'IMG_4442.JPG',
    alt: 'Polished headshot with clean styling',
    category: 'polished',
  },
  {
    file: 'dsc00076.jpg',
    alt: 'Black and white editorial frame',
    category: 'monochrome',
  },
  {
    file: 'dsc08825.jpg',
    alt: 'Glam beauty with rich tones',
    category: 'glam',
  },
]

/** Ordered so similar vibes rarely sit back-to-back */
export const galleryItems: GalleryItem[] = spreadByCategory(baseItems)

/** Featured behind the hero so it does not repeat in the grid */
export const heroImageFile = 'dsc-3115.jpg'

export const galleryGridItems: GalleryItem[] = galleryItems.filter(
  (item) => item.file !== heroImageFile,
)

export function gallerySrc(file: string, baseUrl: string): string {
  const root = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  return `${root}gallery/${encodeURIComponent(file)}`
}
