import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // This allows the server to listen on all network interfaces
    port: 5173 // Make sure this matches the port exposed in Dockerfile
  }
})
