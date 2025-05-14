// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  
  base: "/",
  build: {
    chunkSizeWarningLimit: 3000,
  },

  // para publicar y se acceda por cualquier ip
  //base: '/',
  server: {
    host: '0.0.0.0',
    port: 8081
  }
});
