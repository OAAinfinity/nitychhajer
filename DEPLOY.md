Deployment checklist and recommendations

1) Quick deploy (recommended)

- Vercel
  - Sign in to https://vercel.com and import the repository (GitHub/GitLab/Bitbucket).
  - Build command: npm run build
  - Output directory: dist
  - Vercel will detect Vite automatically in most cases.

- Netlify
  - Create a new site from Git, choose the repo.
  - Build command: npm run build
  - Publish directory: dist
  - Add a `[[redirects]]` rule if you plan SPA client-side routing (not required for this simple site).

2) Local build & preview

- Install deps: npm install
- Dev: npm run dev
- Build: npm run build
- Preview production build locally: npm run preview

3) Mobile & performance recommendations (permanent fixes)

- Optimize images:
  - Right now many images are large (>200KB). Resize images for common screen sizes (e.g., 800px wide for cards, 1600px max for full view) and compress them with a tool like ImageMagick, Squoosh, or a script.
  - Consider generating multiple sizes and use `srcset` + `sizes` so the browser downloads the best image for each device.

- Use lazy-loading for non-critical images (already added for gallery thumbnails).

- Consider adding automatic image optimization into your build pipeline (example options):
  - vite-imagetools (Vite plugin) to generate multiple sizes at build time
  - A simple Node.js script that creates resized copies into `src/assets/optimized/`

- Fonts: Use `font-display: swap` (the Google Fonts link uses `display=swap` already). Consider serving critical fonts locally for best performance.

- Caching & CDN: Deploy to a platform that uses a CDN (Vercel/Netlify) so static assets are cached and served globally.

4) Accessibility & SEO quick wins

- Ensure all images have descriptive `alt` text (already present in gallery data files).
- Add meaningful page `title` and `meta description` in `index.html`.
- Add `rel="noopener noreferrer"` to external links (already used for Instagram link).

5) Follow-up (optional improvements)

- Implement responsive `srcset` for each image using generated variants.
- Add a small service-worker for offline caching if you want PWA features.
- Run Lighthouse (Chrome DevTools) and fix top recommendations.

If you want, I can:
- Generate optimized image sizes for each artwork (I will need permission to modify / create new image files), or
- Add `srcset` entries using a small set of pre-sized images if you provide the resized images.

