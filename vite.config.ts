import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/firebase-api": {
        target: "https://userdata-244b0-default-rtdb.firebaseio.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/firebase-api/, ""),
      },
    },
  },
});
