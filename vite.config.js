import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      component: "/src/component",
      pages: "/src/pages",
      utils: "/src/utils",
      assets: "/src/assets",
      routes: "/src/routes",
    },
  },
});
