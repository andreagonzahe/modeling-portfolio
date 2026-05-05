import { motion, useReducedMotion } from 'framer-motion'
import { galleryGridItems, gallerySrc } from '../data/gallery'

type Props = {
  baseUrl: string
}

/** Curated mosaic: 12-column grid from `md`; `sm` is two equal columns; mobile stacks. */
const BENTO_LAYOUT: readonly string[] = [
  'col-span-12 sm:col-span-6 md:col-span-8 md:row-span-4',
  'col-span-12 sm:col-span-6 md:col-span-4 md:row-span-2',
  'col-span-12 sm:col-span-6 md:col-span-4 md:row-span-2',
  'col-span-12 sm:col-span-6 md:col-span-5 md:row-span-3',
  'col-span-12 sm:col-span-6 md:col-span-7 md:row-span-3',
  'col-span-12 sm:col-span-6 md:col-span-6 md:row-span-3',
  'col-span-12 sm:col-span-6 md:col-span-6 md:row-span-3',
  'col-span-12 sm:col-span-6 md:col-span-7 md:row-span-4',
  'col-span-12 sm:col-span-6 md:col-span-5 md:row-span-4',
]

export function Gallery({ baseUrl }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="gallery"
      className="scroll-mt-[max(5.5rem,calc(env(safe-area-inset-top)+4.25rem))] bg-canvas py-10 sm:scroll-mt-[max(4.5rem,calc(env(safe-area-inset-top)+3.25rem))] sm:py-14 md:py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-5 md:px-8">
        <h2 id="gallery-heading" className="sr-only">
          Selected work
        </h2>

        <div
          className="grid grid-flow-dense grid-cols-12 gap-3 sm:gap-4 md:gap-5 md:auto-rows-[minmax(84px,7.25vmin)]"
          role="list"
          aria-label="Photo gallery"
        >
          {galleryGridItems.map((item, index) => (
            <motion.figure
              key={item.file}
              role="listitem"
              className={`group relative min-h-[220px] overflow-hidden rounded-sm bg-canvas-muted shadow-[0_20px_48px_-26px_rgba(42,77,64,0.38)] ring-1 ring-accent/12 transition-[box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_28px_56px_-24px_rgba(42,77,64,0.45)] md:h-full md:min-h-0 ${BENTO_LAYOUT[index % BENTO_LAYOUT.length]}`}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 34,
                delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.42),
              }}
            >
              <img
                src={gallerySrc(item.file, baseUrl)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain object-center transition duration-500 ease-out motion-safe:group-hover:scale-[1.02]"
              />
              <figcaption className="sr-only">{item.category.replace(/-/g, ' ')}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
