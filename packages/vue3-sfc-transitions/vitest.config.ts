/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    coverage: {
      all: true,
      reporter: ['text', 'lcov'],
      src: ['src']
    },
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**/*.spec.ts']
  }
})
