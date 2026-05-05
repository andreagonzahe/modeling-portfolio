import { motion, useReducedMotion } from 'framer-motion'
import { gallerySrc, heroImageFile } from '../data/gallery'

type Props = {
  baseUrl: string
  onScrollToGallery: () => void
}

export function Hero({ baseUrl, onScrollToGallery }: Props) {
  const reduceMotion = useReducedMotion()
  const src = gallerySrc(heroImageFile, baseUrl)

  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-20"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={src}
          alt=""
          className="h-full w-full scale-105 object-cover opacity-90"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/70 to-canvas/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-transparent to-canvas/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-ink-muted"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Los Angeles · fashion · editorial
        </motion.p>
        <motion.h1
          className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl lg:text-8xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Andrea
          <span className="block text-ink-muted">Gonzahe</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          Movement, light, and personality—booked with intention.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-wider text-canvas transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Inquire for rates
          </a>
          <button
            type="button"
            onClick={onScrollToGallery}
            className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-canvas/40 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-ink backdrop-blur-sm transition hover:border-accent/50 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View portfolio
          </button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to portfolio"
        onClick={onScrollToGallery}
        className="relative z-10 mx-auto mt-14 flex h-12 w-8 items-start justify-center rounded-full border border-ink/25 pt-2 text-ink-muted transition hover:border-accent hover:text-accent"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="block h-2 w-1 rounded-full bg-current motion-safe:animate-bounce" />
      </motion.button>
    </section>
  )
}
