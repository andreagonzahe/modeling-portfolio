const links = [
  { href: '#gallery', label: 'Portfolio' },
  { href: '#bio', label: 'Bio' },
  { href: '#contact', label: 'Contact me' },
] as const

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/15 bg-canvas/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-ink transition hover:text-accent md:text-xl"
        >
          Lacy
        </a>
        <nav
          className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted sm:gap-x-7"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-accent focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
