import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts',],
  treeshake: true,
  sourcemap: 'inline',
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom', 'react-router-dom'],
  injectStyle: false,
  platform: 'browser'
});
