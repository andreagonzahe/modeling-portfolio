import { motion, useReducedMotion } from 'framer-motion'
import { galleryGridItems, gallerySrc } from '../data/gallery'

type Props = {
  baseUrl: string
}

function layoutForIndex(index: number): string {
  const cycle = [
    'col-span-2 row-span-2 min-h-[56vw] md:col-span-2 md:row-span-2 md:min-h-[min(560px,52vh)]',
    'col-span-2 min-h-[44vw] md:col-span-2 md:min-h-[300px]',
    'col-span-1 min-h-[46vw] md:col-span-1 md:min-h-[280px]',
    'col-span-1 min-h-[46vw] md:col-span-1 md:min-h-[280px]',
    'col-span-2 min-h-[48vw] md:col-span-2 md:min-h-[340px]',
    'col-span-2 min-h-[50vw] md:col-span-4 md:min-h-[min(480px,56vh)]',
  ]
  return cycle[index % cycle.length]
}

export function Gallery({ baseUrl }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="gallery"
      className="scroll-mt-16 bg-canvas px-3 py-16 sm:px-5 md:scroll-mt-20 md:px-8 md:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          className="mb-10 px-1 md:mb-12"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          <h2
            id="gallery-heading"
            className="font-serif text-2xl tracking-tight text-ink md:text-3xl"
          >
            Selected work
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-4 md:gap-6">
          {galleryGridItems.map((item, index) => (
            <motion.figure
              key={item.file}
              className={`group relative overflow-hidden rounded-2xl bg-canvas-muted shadow-[0_20px_50px_-20px_rgba(42,77,64,0.22)] ring-1 ring-accent/10 md:rounded-3xl ${layoutForIndex(index)}`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-24px' }}
              transition={{
                duration: 0.4,
                delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.35),
              }}
            >
              <img
                src={gallerySrc(item.file, baseUrl)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-[800ms] ease-out group-hover:scale-[1.02]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas/95 from-10% to-transparent p-3 opacity-0 transition duration-300 group-hover:opacity-100 md:p-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted md:text-xs">
                  {item.category.replace(/-/g, ' ')}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
