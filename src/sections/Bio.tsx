import { motion, useReducedMotion } from 'framer-motion'

export function Bio() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="bio"
      className="scroll-mt-[max(5.5rem,calc(env(safe-area-inset-top)+4.25rem))] border-y border-accent/12 bg-surface/80 px-4 py-16 sm:scroll-mt-[max(4.5rem,calc(env(safe-area-inset-top)+3.25rem))] sm:px-6 md:px-10 md:py-20"
      aria-labelledby="bio-heading"
    >
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accent">
            A little about me
          </p>
          <h2
            id="bio-heading"
            className="mt-3 font-serif text-2xl tracking-tight text-ink md:text-3xl"
          >
            Mexico → Los Angeles
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
            Originally from Mexico, I moved to LA in 2017 and have been here since,
            soaking up the light and creative scene. I love collaborating with
            photographers across editorial and lifestyle, intimate boudoir sets, and
            fine art nude and figure work—always with clear communication and respect
            for boundaries on set.
          </p>
        </motion.div>

        <motion.ul
          className="flex flex-col justify-center gap-4 rounded-2xl border border-accent/15 bg-canvas/90 p-6 md:rounded-3xl md:p-8"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.06 }}
        >
          {[
            { label: 'Home base', value: 'Los Angeles' },
            { label: 'Since', value: '2017 in LA' },
            {
              label: 'On set',
              value:
                'Editorial · beauty · lifestyle · boudoir · fine art nude · figure',
            },
          ].map((row) => (
            <li
              key={row.label}
              className="flex flex-col gap-0.5 border-b border-accent/10 pb-4 last:border-b-0 last:pb-0"
            >
              <span className="text-[10px] uppercase tracking-[0.28em] text-ink-muted">
                {row.label}
              </span>
              <span className="text-lg font-medium text-ink">{row.value}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
