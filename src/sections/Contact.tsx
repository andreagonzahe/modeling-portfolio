import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined

type Props = {
  inquiryEmail: string
}

export function Contact({ inquiryEmail }: Props) {
  const reduceMotion = useReducedMotion()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!FORMSPREE_ID) {
      setStatus('error')
      return
    }

    const form = event.currentTarget
    setStatus('submitting')

    try {
      const body = new FormData(form)
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })

      if (!res.ok) throw new Error('Formspree error')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-5 py-24 md:px-10 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            Booking
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-4xl tracking-tight text-ink md:text-5xl"
          >
            Inquire for rates
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Share the scope, dates, and mood board—I&apos;ll reply with availability and
            rates. Prefer email directly?{' '}
            <a
              className="text-accent underline-offset-4 hover:underline"
              href={`mailto:${inquiryEmail}`}
            >
              {inquiryEmail}
            </a>
          </p>
          {!FORMSPREE_ID && (
            <p
              className="mt-4 rounded-2xl border border-amber-500/40 bg-accent-soft px-4 py-3 text-sm text-ink"
              role="status"
            >
              Add{' '}
              <code className="rounded bg-canvas-muted px-1.5 py-0.5 text-xs">
                VITE_FORMSPREE_FORM_ID
              </code>{' '}
              to <code className="rounded bg-canvas-muted px-1.5 py-0.5 text-xs">.env.local</code>{' '}
              (see README). The button below opens your mail client as a fallback.
            </p>
          )}
        </motion.div>

        <motion.div
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <form
            className="flex flex-col gap-5 rounded-3xl border border-ink/10 bg-canvas-muted/30 p-6 backdrop-blur-md md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-left text-sm text-ink-muted">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-base text-ink outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
                />
              </label>
              <label className="flex flex-col gap-2 text-left text-sm text-ink-muted">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-base text-ink outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-left text-sm text-ink-muted">
              Shoot type / concept
              <input
                name="shoot_type"
                type="text"
                placeholder="Editorial, commercial, test shoot..."
                className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-base text-ink outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-left text-sm text-ink-muted">
              Ideal dates
              <input
                name="dates"
                type="text"
                placeholder="Windows or specific days"
                className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-base text-ink outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-left text-sm text-ink-muted">
              Message
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about usage, team, location, and budget range."
                className="resize-y rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-base text-ink outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
              />
            </label>

            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="flex flex-wrap items-center gap-4">
              {FORMSPREE_ID ? (
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-canvas transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
                </button>
              ) : (
                <a
                  href={`mailto:${inquiryEmail}?subject=Booking%20inquiry`}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-canvas transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Email inquiry
                </a>
              )}
              {status === 'success' && (
                <p className="text-sm text-accent" role="status">
                  Sent—thank you! I&apos;ll reply shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400" role="alert">
                  Something went wrong. Try email or refresh.
                </p>
              )}
            </div>
          </form>

          <aside className="flex flex-col justify-between gap-8 rounded-3xl border border-dashed border-ink/20 p-8 md:p-10">
            <div>
              <h3 className="font-serif text-2xl text-ink">Session checklist</h3>
              <ul className="mt-6 space-y-4 text-ink-muted">
                <li>— Mood references or Pinterest boards</li>
                <li>— Location + parking notes</li>
                <li>— Wardrobe props or glam needs</li>
                <li>— Intended usage (portfolio, social, commercial)</li>
              </ul>
            </div>
            <p className="text-sm text-ink-muted">
              Inquiries route to{' '}
              <span className="text-ink">{inquiryEmail}</span> via Formspree once your
              form ID is configured for production builds.
            </p>
          </aside>
        </motion.div>
      </div>
    </section>
  )
}
