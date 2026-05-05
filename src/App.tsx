import { useCallback } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { Bio } from './sections/Bio'
import { Contact } from './sections/Contact'
import { Gallery } from './sections/Gallery'
import { Hero } from './sections/Hero'

const baseUrl = import.meta.env.BASE_URL
const INQUIRY_EMAIL = 'lacyismodeling@gmail.com'

export default function App() {
  const scrollGallery = useCallback(() => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div id="top" className="min-h-svh bg-canvas">
      <SiteHeader />
      <main>
        <Hero baseUrl={baseUrl} onScrollToGallery={scrollGallery} />
        <Gallery baseUrl={baseUrl} />
        <Bio />
        <Contact inquiryEmail={INQUIRY_EMAIL} />
      </main>
      <footer className="border-t border-accent/12 px-4 py-8 text-center text-xs text-ink-muted sm:px-6 md:px-10 md:text-sm">
        <p>
          © {new Date().getFullYear()} Lacy · Los Angeles ·{' '}
          <a
            className="font-medium text-accent underline-offset-4 hover:underline"
            href={`mailto:${INQUIRY_EMAIL}`}
          >
            {INQUIRY_EMAIL}
          </a>
        </p>
      </footer>
    </div>
  )
}
