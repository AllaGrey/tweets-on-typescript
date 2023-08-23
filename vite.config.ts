import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tweets-on-typescript',
  server: {
    open: '/tweets-on-typescript',
    port: 3000,
  },
})
