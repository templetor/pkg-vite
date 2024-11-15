import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'ph_reponame',
      formats: ['es', 'umd'],
      fileName: f => `main.${f}.js`,
    },
    target: 'esnext',
  },
  esbuild: {
    charset: 'ascii',
  },
})
