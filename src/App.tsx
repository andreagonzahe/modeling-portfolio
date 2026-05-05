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
      <footer className="border-t border-ink/10 px-5 py-10 text-center text-sm text-ink-muted md:px-10">
        <p>
          © {new Date().getFullYear()} Andrea Gonzahe · Los Angeles ·{' '}
          <a
            className="text-accent underline-offset-4 hover:underline"
            href={`mailto:${INQUIRY_EMAIL}`}
          >
            {INQUIRY_EMAIL}
          </a>
        </p>
      </footer>
    </div>
  )
}
