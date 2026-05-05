const links = [
  { href: '#gallery', label: 'Portfolio' },
  { href: '#bio', label: 'Bio' },
  { href: '#contact', label: 'Contact me' },
] as const

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/15 bg-canvas/65 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10">
        <a
          href="#top"
          className="-mx-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg px-2 font-serif text-lg tracking-tight text-ink transition hover:text-accent [-webkit-tap-highlight-color:transparent] md:min-h-0 md:min-w-0 md:text-xl"
        >
          Lacy
        </a>
        <nav
          className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted sm:gap-x-7 sm:gap-y-2"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [-webkit-tap-highlight-color:transparent] sm:min-h-0 sm:px-0 sm:py-0 sm:focus-visible:outline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
