import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // para publicar y escuche por cualquier ip
  server: {
    host: '0.0.0.0',
    port: 8080
  }
})
