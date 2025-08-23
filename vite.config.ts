import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // IMPORTANT for GitHub Pages (subdomain or repo)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
