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
      className="relative min-h-[100svh] overflow-hidden pt-[calc(env(safe-area-inset-top)+5.25rem)] sm:pt-[calc(env(safe-area-inset-top)+3.5rem)] md:pt-[calc(env(safe-area-inset-top)+3.25rem)]"
      aria-label="Featured photo"
    >
      <div className="absolute inset-0">
        <img
          src={src}
          alt="Lacy — Los Angeles model; editorial portrait in warm studio light"
          className="h-full w-full object-cover object-[center_20%]"
          decoding="async"
          fetchPriority="high"
        />
        {/* Soft mist at bottom only — photo stays the hero */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas from-15% via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-emerald-100/25 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-env(safe-area-inset-top)-5.25rem)] flex-col justify-end gap-8 px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-6 sm:min-h-[calc(100svh-env(safe-area-inset-top)-3.5rem)] sm:px-6 md:min-h-[calc(100svh-env(safe-area-inset-top)-3.25rem)] md:px-10 md:pb-[max(3rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h1 className="font-serif text-4xl tracking-tight text-ink drop-shadow-[0_1px_12px_rgba(238,248,243,0.9)] md:text-5xl">
              Lacy
            </h1>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.35em] text-ink-muted drop-shadow-[0_1px_8px_rgba(238,248,243,0.95)]">
              Los Angeles · LA model
            </p>
            <p className="mt-2 max-w-md text-[11px] font-medium leading-snug tracking-wide text-ink/85 drop-shadow-[0_1px_8px_rgba(238,248,243,0.9)] sm:text-xs">
              Editorial &amp; lifestyle · boudoir · fine art nude &amp; figure
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
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-accent/25 transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [-webkit-tap-highlight-color:transparent]"
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
          className="mx-auto mt-4 flex h-11 w-11 items-center justify-center rounded-full border border-accent/25 bg-surface/50 text-accent backdrop-blur-sm transition hover:border-accent/50 hover:bg-surface [-webkit-tap-highlight-color:transparent]"
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
