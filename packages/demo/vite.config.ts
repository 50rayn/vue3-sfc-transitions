import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const outDir = path.resolve(__dirname, '..', '..', 'docs')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir
  },
  plugins: [vue()]
})
