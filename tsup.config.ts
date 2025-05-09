import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    entry: ['src/index.ts'],
    splitting: true,
    clean: true,
    minify: true,
}))