import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   base: './', // Add this line to ensure the paths are relative
  plugins: [vue()],
})
