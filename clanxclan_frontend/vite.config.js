import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',           // Tells Vite where to find index.html
  build: {
    outDir: 'dist',
  },
})
