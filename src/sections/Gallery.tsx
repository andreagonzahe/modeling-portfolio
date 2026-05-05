import { motion, useReducedMotion } from 'framer-motion'
import { galleryGridItems, gallerySrc } from '../data/gallery'

type Props = {
  baseUrl: string
}

function layoutForIndex(index: number): string {
  const cycle = [
    'col-span-2 row-span-2 min-h-[52vw] md:col-span-2 md:row-span-2 md:min-h-[min(520px,48vh)]',
    'col-span-2 min-h-[42vw] md:col-span-2 md:min-h-[280px]',
    'col-span-1 min-h-[44vw] md:col-span-1 md:min-h-[260px]',
    'col-span-1 min-h-[44vw] md:col-span-1 md:min-h-[260px]',
    'col-span-2 min-h-[46vw] md:col-span-2 md:min-h-[320px]',
    'col-span-2 min-h-[48vw] md:col-span-4 md:min-h-[min(440px,52vh)]',
  ]
  return cycle[index % cycle.length]
}

export function Gallery({ baseUrl }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="gallery"
      className="scroll-mt-20 px-5 py-24 md:px-10 md:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
              Portfolio
            </p>
            <h2
              id="gallery-heading"
              className="mt-3 font-serif text-4xl tracking-tight text-ink md:text-5xl"
            >
              Frames that keep moving
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-muted md:text-right">
            Sequences are arranged so moods alternate—editorial next to outdoor,
            glam beside monochrome—so every scroll feels like a new beat.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {galleryGridItems.map((item, index) => (
            <motion.figure
              key={item.file}
              className={`group relative overflow-hidden rounded-2xl bg-canvas-muted shadow-[0_20px_60px_-30px_rgba(0,0,0,0.85)] ${layoutForIndex(index)}`}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : Math.min(index * 0.05, 0.45),
              }}
            >
              <img
                src={gallerySrc(item.file, baseUrl)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas/90 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-widest text-ink-muted">
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
