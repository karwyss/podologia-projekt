import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: './src',
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',  // ważne dla deploymentu
  build: {
    outDir: '../dist',   // wyjdzie z src do root/dist
    sourcemap: false,
    rollupOptions: {
      input: 'index.jsx',  // względnie do root czyli ./src/index.jsx
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
