import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'mi-libreria-ui': '/Users/jesus.vargas/MATERIAL DUOC/Full Stack 3/ejemplo_lib_npm/mi-libreria-ui/src/index.js'
    }
  }
})
