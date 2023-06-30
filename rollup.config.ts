import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'

/**
 * Rollup Configuration
 */
export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].mjs',
      chunkFileNames: '[name]-[ext]'
    },
    plugins: [
      typescript({
        check: false
      }),
      vue(),
      postcss()
    ],
    external: ['vue']
  }
])
