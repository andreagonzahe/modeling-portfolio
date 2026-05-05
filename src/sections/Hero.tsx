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
      className="relative min-h-[100svh] overflow-hidden pt-[52px]"
      aria-label="Featured photo"
    >
      <div className="absolute inset-0">
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover object-[center_20%]"
          decoding="async"
          fetchPriority="high"
        />
        {/* Soft mist at bottom only — photo stays the hero */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas from-15% via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-emerald-100/25 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-52px)] flex-col justify-end gap-8 px-4 pb-8 pt-6 sm:px-6 md:px-10 md:pb-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <p className="font-serif text-4xl tracking-tight text-ink drop-shadow-[0_1px_12px_rgba(238,248,243,0.9)] md:text-5xl">
              Lacy
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.35em] text-ink-muted drop-shadow-[0_1px_8px_rgba(238,248,243,0.95)]">
              Los Angeles
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <button
              type="button"
              onClick={onScrollToGallery}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-accent/25 transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Photos
              <span aria-hidden className="text-sm motion-safe:animate-bounce">
                ↓
              </span>
            </button>
          </motion.div>
        </div>

        <motion.button
          type="button"
          aria-label="Scroll to portfolio"
          onClick={onScrollToGallery}
          className="mx-auto mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-accent/25 bg-surface/50 text-accent backdrop-blur-sm transition hover:border-accent/50 hover:bg-surface"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <span className="text-lg motion-safe:animate-bounce">↓</span>
        </motion.button>
      </div>
    </section>
  )
}
