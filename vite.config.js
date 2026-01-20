import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',  // Ważne dla deploymentu
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: '/src/index.jsx',
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})