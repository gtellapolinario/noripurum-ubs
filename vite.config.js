import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Adicione esta importação

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@c': path.resolve(__dirname, './src/components'),
      '@a': path.resolve(__dirname, './src/assets'),
      '@p': path.resolve(__dirname, './src/pages'),
    },
  },
  assetsInclude: ['**/*.pdf'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
});

