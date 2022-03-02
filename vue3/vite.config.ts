import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default ({ mode }) => {
  process.env = {...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue()],
    base: './',
    resolve: {
      alias: {
        '@': resolve(__dirname, '.', 'src')
      }
    },
    build: {
      outDir: process.env.VITE_APP_DIR,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
        }
      }
    },
  });
};
