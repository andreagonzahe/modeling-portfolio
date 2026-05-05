import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Public site origin (no trailing slash). Used for canonical, OG URLs, sitemap. */
function resolveSiteUrl(): string {
  const fromEnv = process.env.VITE_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/+$/, '')
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}`.replace(/\/+$/, '')
  return 'https://andreagonzahe.github.io/modeling-portfolio'
}

function seoPlugin(): Plugin {
  let outDir = 'dist'

  return {
    name: 'seo-site-url-and-files',
    configResolved(config) {
      outDir = config.build.outDir
    },
    transformIndexHtml(html) {
      const siteUrl = resolveSiteUrl()
      return html.replaceAll('%SITE_URL%', siteUrl)
    },
    closeBundle() {
      const siteUrl = resolveSiteUrl()
      const robots = [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${siteUrl}/sitemap.xml`,
        '',
      ].join('\n')
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '  <url>',
        `    <loc>${siteUrl}/</loc>`,
        '    <changefreq>monthly</changefreq>',
        '    <priority>1.0</priority>',
        '  </url>',
        '</urlset>',
        '',
      ].join('\n')
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robots, 'utf8')
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8')
    },
  }
}

// GitHub Pages uses /modeling-portfolio/; Vercel serves from /
// https://vite.dev/config/
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/modeling-portfolio/',
  plugins: [react(), tailwindcss(), seoPlugin()],
})
