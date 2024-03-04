import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Avila-Pato.github.io/React-Rick-And-Morty/",
  plugins: [react()],
})
