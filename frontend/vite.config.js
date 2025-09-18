import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
      '@': path.resolve(__dirname, './src'), // optional, for cleaner imports
    },
  },
})
