import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
     plugins: [vue()],
  base: './', // Ensure correct base path for relative imports
  build: {
    outDir: 'dist', // Output directory for the build files
  },
})
