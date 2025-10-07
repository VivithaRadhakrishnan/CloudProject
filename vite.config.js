import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Ensure Vite runs on port 3000 (same as Create React App default)
    open: true, // Automatically open browser on start
    proxy: {
      // Proxy API requests to json-server running on port 5000
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure Vite recognizes .jsx files
  },
  optimizeDeps: {
    include: ['axios'],  // Force pre-bundling of axios to avoid resolution errors
  },
});