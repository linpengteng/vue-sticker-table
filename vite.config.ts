import { defineConfig } from 'vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  root: './example',
  publicDir: 'assets',
  plugins: [
    Components({
      resolvers: [VantResolver()],
      dirs: ['components'],
      dts: 'components.d.ts'
    }),
    vue()
  ]
})
