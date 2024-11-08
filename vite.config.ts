import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'ph_reponame',
      formats: ['es', 'cjs'],
      fileName: f => `main.${f}.js`,
    },
    target: 'esnext',
  },
  esbuild: {
    charset: 'ascii',
  },
})
