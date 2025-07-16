import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'neutral',
  dts: {
    isolatedDeclarations: true,
  },
  exports: true,
  format: ['esm', 'cjs'],
  target: ['es2020'],
})
