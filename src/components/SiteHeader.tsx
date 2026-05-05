const links = [
  { href: '#gallery', label: 'Portfolio' },
  { href: '#bio', label: 'Bio' },
  { href: '#contact', label: 'Rates' },
] as const

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-canvas/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-10">
        <a
          href="#top"
          className="font-serif text-xl tracking-tight text-ink transition hover:text-accent"
        >
          Andrea Gonzahe
        </a>
        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
