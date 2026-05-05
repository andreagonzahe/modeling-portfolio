import { motion, useReducedMotion } from 'framer-motion'
import { galleryGridItems, gallerySrc } from '../data/gallery'

type Props = {
  baseUrl: string
}

/**
 * Large mosaic: full-width lead on `md+`, tall row tracks (`vh`/`vw`) so
 * `object-contain` photos read as big as the viewport allows.
 */
const BENTO_LAYOUT: readonly string[] = [
  'col-span-12 md:col-span-12 md:row-span-5',
  'col-span-12 sm:col-span-6 md:col-span-6 md:row-span-3',
  'col-span-12 sm:col-span-6 md:col-span-6 md:row-span-3',
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
      <div className="mx-auto w-full max-w-[min(100%,2400px)] px-2 sm:px-3 md:px-4 lg:px-6">
        <h2 id="gallery-heading" className="sr-only">
          Selected work
        </h2>

        <div
          className="grid grid-flow-dense grid-cols-12 gap-3 sm:gap-3.5 md:gap-4 md:auto-rows-[minmax(100px,min(17vh,12vw))]"
          role="list"
          aria-label="Photo gallery"
        >
          {galleryGridItems.map((item, index) => (
            <motion.figure
              key={item.file}
              role="listitem"
              className={`group relative min-h-[min(92vw,78svh)] overflow-hidden bg-canvas sm:min-h-[min(58vw,72svh)] md:h-full md:min-h-0 ${BENTO_LAYOUT[index % BENTO_LAYOUT.length]}`}
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
                className="absolute inset-0 h-full w-full object-contain object-center transition duration-700 ease-out motion-safe:group-hover:scale-[1.015]"
              />
              <figcaption className="sr-only">{item.category.replace(/-/g, ' ')}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
