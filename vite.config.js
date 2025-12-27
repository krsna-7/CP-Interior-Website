import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',            // ✅ prevents blank page on Vercel
  build: {
    outDir: 'dist',     // ✅ Vercel default
  },
})
