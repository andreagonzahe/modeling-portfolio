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
      className="scroll-mt-[max(5.5rem,calc(env(safe-area-inset-top)+4.25rem))] bg-canvas px-3 py-16 sm:scroll-mt-[max(4.5rem,calc(env(safe-area-inset-top)+3.25rem))] sm:px-5 md:px-8 md:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          className="mx-auto mb-8 max-w-[1120px] px-1 md:mb-10"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-accent">
            Portfolio
          </p>
          <h2
            id="gallery-heading"
            className="mt-2 font-serif text-2xl tracking-tight text-ink md:text-3xl"
          >
            Selected work
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted md:text-base">
            Los Angeles modeling portfolio — editorial, beauty, lifestyle, and boudoir-inspired
            frames. Full images, no awkward crops — swipe on your phone or scroll on desktop.
          </p>
        </motion.div>

        {/* Caps gallery width; grid uses 268px tracks so tiles stay near the 288px mobile cap */}
        <div className="mx-auto w-full max-w-[1120px]">
          {/* Mobile / tablet: horizontal snap strip */}
          <div
            className="gallery-x-scroll flex touch-pan-x snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-3 pt-1 sm:gap-4 md:hidden"
            role="list"
            aria-label="Photo gallery"
          >
          {galleryGridItems.map((item, index) => (
            <motion.figure
              key={item.file}
              role="listitem"
              className="group relative aspect-[3/4] w-[min(76vw,288px)] shrink-0 snap-start overflow-hidden bg-canvas-muted shadow-[0_18px_42px_-22px_rgba(42,77,64,0.35)] ring-1 ring-accent/12 transition-[box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.99]"
              initial={reduceMotion ? false : { opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 420,
                damping: 36,
                delay: reduceMotion ? 0 : Math.min(index * 0.05, 0.4),
              }}
            >
              <img
                src={gallerySrc(item.file, baseUrl)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain object-center transition duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas/98 from-15% to-transparent p-3 opacity-100">
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  {item.category.replace(/-/g, ' ')}
                </span>
              </figcaption>
            </motion.figure>
          ))}
          </div>

          {/* Fixed ~268px tracks + centered partial rows → desktop tiles match the ~288px mobile cap */}
          <div
            className="hidden md:grid md:justify-center md:gap-x-5 md:gap-y-8 md:[grid-template-columns:repeat(auto-fill,268px)]"
            role="list"
            aria-label="Photo gallery"
          >
            {galleryGridItems.map((item, index) => (
              <motion.figure
                key={item.file}
                role="listitem"
                className="group relative aspect-[3/4] w-full overflow-hidden bg-canvas-muted shadow-[0_18px_42px_-22px_rgba(42,77,64,0.32)] ring-1 ring-accent/12 transition-[box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_28px_56px_-24px_rgba(42,77,64,0.42)]"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 34,
                  delay: reduceMotion ? 0 : Math.min(index * 0.055, 0.48),
                }}
              >
                <img
                  src={gallerySrc(item.file, baseUrl)}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain object-center transition duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-canvas/98 from-15% to-transparent p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-coarse:translate-y-0 pointer-coarse:opacity-100 md:p-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted md:text-xs">
                    {item.category.replace(/-/g, ' ')}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
