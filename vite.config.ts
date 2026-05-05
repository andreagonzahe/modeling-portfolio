import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages uses /modeling-portfolio/; Vercel serves from /
// https://vite.dev/config/
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/modeling-portfolio/',
  plugins: [react(), tailwindcss()],
})
