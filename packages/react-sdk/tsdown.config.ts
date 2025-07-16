import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    platform: 'neutral',
    dts: true,
    exports: true,
    target: ['es2020'],
    format: ['esm', 'cjs'],
  },
])
