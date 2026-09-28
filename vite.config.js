import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site from /<repo-name>/, while Vercel, Netlify and
// custom domains serve it from the root. The Pages workflow sets
// DEPLOY_BASE so each host gets the right base path from one config.
const base = process.env.DEPLOY_BASE ?? '/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
