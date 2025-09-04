# Deployment Guide

## Static hosting (GitHub Pages)
- Ensure `staticAdapter({ origin: 'https://<owner>.github.io/<repo>' })` is set in `vite.config.ts`.
- For this repo, suggested origin: `https://SergeiGolos.github.io/jon-blank-music`.
- Build and generate static output via `npm run build`.
- Publish the `dist/` directory to Pages (via Actions or manual).

## Cache and performance
- Verify pre-rendered routes and asset caching. Optimize images in `public/`.

## Environment
- Node >= 18.17 or >= 20.3 as per `engines` in `package.json`.
