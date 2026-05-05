# Modeling portfolio

Modern single-page portfolio for **Lacy**—Los Angeles model (Mexico-born, based in LA since 2017). Built with Vite, React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Local development

```bash
npm install
cp .env.example .env.local
# Add your Formspree form ID to .env.local (see below)
npm run dev
```

## Formspree (inquiries to Gmail)

1. Create a form at [Formspree](https://formspree.io).
2. Set the submission email to **lacyismodeling@gmail.com**.
3. Copy the form id from the endpoint URL (`https://formspree.io/f/xxxxxxxx`).
4. Put it in `.env.local`:

   ```bash
   VITE_FORMSPREE_FORM_ID=xxxxxxxx
   ```

5. Restart `npm run dev`. Without this variable, the UI falls back to a `mailto:` button.

For production builds (including GitHub Actions), add a repository secret named **`VITE_FORMSPREE_FORM_ID`** with the same value so CI can inject it at build time.

## GitHub Pages

The site is configured with `base: '/modeling-portfolio/'` for the repository name **modeling-portfolio** under user **andreagonzahe**. After deployment, the public URL will be:

`https://andreagonzahe.github.io/modeling-portfolio/`

### Enable Pages

In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The workflow (`.github/workflows/deploy.yml`) builds on every push to `main` and publishes `dist/`.

## Replace or add photos

Source images live in `public/gallery/`. Update the list in `src/data/gallery.ts` (file names, alt text, and `category` labels). Categories are reordered by `spreadByCategory()` so similar moods are less likely to appear back-to-back.

RAW `.NEF` files must be exported to JPG or WebP before going on the web; the copies in this repo were converted locally for that reason.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial modeling portfolio"
git branch -M main
git remote add origin https://github.com/andreagonzahe/modeling-portfolio.git
git push -u origin main
```

Use SSH instead of HTTPS if that is how your machine is configured.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start Vite dev server    |
| `npm run build`| Typecheck + production build |
| `npm run preview` | Preview production build locally |
