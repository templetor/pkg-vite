import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
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
      formats: ['es', 'umd'],
      fileName: f => `main.${f}.js`,
    },
    target: 'esnext',
  },
})
