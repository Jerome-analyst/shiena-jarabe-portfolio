import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves this project from /<repo-name>/.
  // Change to '/' if you later host it at a domain root (Netlify, Vercel,
  // or a custom domain).
  base: '/shiena-jarabe-portfolio/',
})
