import { motion, useReducedMotion } from 'framer-motion'

export function Bio() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="bio"
      className="scroll-mt-20 border-y border-ink/10 bg-canvas-muted/40 px-5 py-24 md:px-10 md:py-32"
      aria-labelledby="bio-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            Bio
          </p>
          <h2
            id="bio-heading"
            className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl"
          >
            Rooted in Mexico, home in LA
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            I&apos;m originally from Mexico and relocated to Los Angeles in 2017—and
            I&apos;ve been here ever since, letting the city&apos;s light and rhythm
            shape how I show up on set. I love meeting new models and photographers,
            building chemistry quickly, and expressing myself through my body with
            clarity and play.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Whether it&apos;s refined editorial, energetic movement, or intimate
            portraiture, I bring professionalism, warmth, and a spark that keeps
            frames feeling alive.
          </p>
        </motion.div>

        <motion.ul
          className="flex flex-col justify-center gap-6 rounded-3xl border border-ink/10 bg-canvas/60 p-8 backdrop-blur-md md:p-10"
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08 }}
        >
          {[
            { label: 'Based in', value: 'Los Angeles, CA' },
            { label: 'Since', value: '2017 in LA · Mexico-born' },
            { label: 'Focus', value: 'Editorial · beauty · lifestyle' },
            { label: 'Vibe', value: 'Collaborative, kinetic, precise' },
          ].map((row) => (
            <li
              key={row.label}
              className="flex flex-col gap-1 border-b border-ink/10 pb-6 last:border-b-0 last:pb-0"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-ink-muted">
                {row.label}
              </span>
              <span className="text-xl font-medium text-ink">{row.value}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
