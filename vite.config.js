// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: false,
    origin: 'https://5173-danpearce-hjgoodwincom-55ali0kbydn.ws-eu120.gitpod.io'
  }
})