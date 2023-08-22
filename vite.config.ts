import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/goit-typescript-hw-01',
  server: {
    open: '/goit-typescript-hw-01',
    port: 3000,
  },
})
