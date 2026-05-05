import { motion, useReducedMotion } from 'framer-motion'
import { galleryGridItems, gallerySrc } from '../data/gallery'

type Props = {
  baseUrl: string
}

export function Gallery({ baseUrl }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="gallery"
      className="scroll-mt-[max(5.5rem,calc(env(safe-area-inset-top)+4.25rem))] bg-canvas py-10 sm:scroll-mt-[max(4.5rem,calc(env(safe-area-inset-top)+3.25rem))] sm:py-14 md:py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="w-full">
        <h2 id="gallery-heading" className="sr-only">
          Selected work
        </h2>

        {/* Large centered slides: swipe on touch, horizontal scroll + snap everywhere */}
        <div
          className="gallery-x-scroll flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-2 pl-[max(0.75rem,calc(50%-min(44vw,21rem,33svh)))] pr-[max(0.75rem,calc(50%-min(44vw,21rem,33svh)))] sm:gap-5 sm:py-3 md:gap-6 md:py-6"
          role="list"
          aria-label="Photo gallery"
        >
          {galleryGridItems.map((item, index) => (
            <motion.figure
              key={item.file}
              role="listitem"
              className="group relative aspect-[3/4] w-[min(88vw,42rem,calc(88svh*3/4))] shrink-0 snap-center overflow-hidden rounded-sm bg-canvas-muted shadow-[0_24px_64px_-28px_rgba(42,77,64,0.45)] ring-1 ring-accent/15 transition-[box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_32px_72px_-28px_rgba(42,77,64,0.5)] motion-safe:active:scale-[0.995]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 32,
                delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.35),
              }}
            >
              <img
                src={gallerySrc(item.file, baseUrl)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain object-center transition duration-500 ease-out motion-safe:group-hover:scale-[1.02]"
              />
              <figcaption className="sr-only">{item.category.replace(/-/g, ' ')}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
