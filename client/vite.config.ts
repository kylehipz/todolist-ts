/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTSConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTSConfigPaths()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.API_ROUTE ?? 'http://localhost:8000',
        changeOrigin: true,
        secure: false
      }
    },
    host: true,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts'
  }
})
