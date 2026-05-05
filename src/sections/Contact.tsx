import { useEffect, useRef } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { motion, useReducedMotion } from 'framer-motion'

/** Fall back to the live form so local dev works without `.env.local`. Override with `VITE_FORMSPREE_FORM_ID` in production if needed. */
const DEFAULT_FORMSPREE_FORM_ID = 'xqenbkgr'

const formspreeFormId =
  (import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined)?.trim() ||
  DEFAULT_FORMSPREE_FORM_ID

type ContactFields = {
  name: string
  email: string
  shoot_type: string
  dates: string
  message: string
}

type Props = {
  inquiryEmail: string
}

export function Contact({ inquiryEmail }: Props) {
  const reduceMotion = useReducedMotion()
  const formRef = useRef<HTMLFormElement>(null)
  const [state, handleSubmit] = useForm<ContactFields>(formspreeFormId)

  useEffect(() => {
    if (state.succeeded) formRef.current?.reset()
  }, [state.succeeded])

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-canvas px-4 py-16 sm:px-6 md:scroll-mt-20 md:px-10 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-10 max-w-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accent">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-2xl tracking-tight text-ink md:text-3xl"
          >
            Say hello
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            Tell me what you&apos;re dreaming up—dates, mood, team—and I&apos;ll get back
            with availability and rates. Or email me directly at{' '}
            <a
              className="font-medium text-accent underline-offset-4 hover:underline"
              href={`mailto:${inquiryEmail}`}
            >
              {inquiryEmail}
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <form
            ref={formRef}
            className="flex flex-col gap-4 rounded-2xl border border-accent/15 bg-surface/90 p-6 shadow-sm md:rounded-3xl md:p-8"
            onSubmit={handleSubmit}
          >
            <ValidationError
              errors={state.errors}
              className="text-sm text-rose-600"
              role="alert"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-left text-sm text-ink-muted">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="rounded-xl border border-accent/20 bg-canvas px-4 py-3 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
                />
                <ValidationError
                  field="name"
                  errors={state.errors}
                  className="text-sm text-rose-600"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-left text-sm text-ink-muted">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-xl border border-accent/20 bg-canvas px-4 py-3 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
                />
                <ValidationError
                  field="email"
                  errors={state.errors}
                  className="text-sm text-rose-600"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-left text-sm text-ink-muted">
              Shoot type / concept
              <input
                name="shoot_type"
                type="text"
                placeholder="Editorial, commercial, test shoot..."
                className="rounded-xl border border-accent/20 bg-canvas px-4 py-3 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
              />
              <ValidationError
                field="shoot_type"
                errors={state.errors}
                className="text-sm text-rose-600"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-left text-sm text-ink-muted">
              Ideal dates
              <input
                name="dates"
                type="text"
                placeholder="Windows or specific days"
                className="rounded-xl border border-accent/20 bg-canvas px-4 py-3 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
              />
              <ValidationError
                field="dates"
                errors={state.errors}
                className="text-sm text-rose-600"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-left text-sm text-ink-muted">
              Message
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Usage, location, team, budget ballpark..."
                className="resize-y rounded-xl border border-accent/20 bg-canvas px-4 py-3 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
              />
              <ValidationError
                field="message"
                errors={state.errors}
                className="text-sm text-rose-600"
              />
            </label>

            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-accent/20 transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {state.submitting ? 'Sending…' : 'Send message'}
              </button>
              {state.succeeded && (
                <p className="text-sm font-medium text-accent" role="status">
                  Sent—thank you! I&apos;ll reply soon.
                </p>
              )}
            </div>
          </form>

          <aside className="flex flex-col gap-6 rounded-2xl border border-dashed border-accent/25 bg-canvas-muted/50 p-6 md:rounded-3xl md:p-8">
            <div>
              <h3 className="font-serif text-xl text-ink md:text-2xl">Helpful details</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted md:text-base">
                <li>Mood refs or boards</li>
                <li>Location & parking</li>
                <li>Wardrobe / glam needs</li>
                <li>How you&apos;ll use the images</li>
              </ul>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  )
}
