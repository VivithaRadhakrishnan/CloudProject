import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Optional: Explicitly set Vite's port (default is 5173)
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Forward API requests to json-server
        changeOrigin: true, // Needed for CORS
        rewrite: (path) => path.replace(/^\/api/, '') // Remove /api prefix before forwarding
      }
    }
  }
})