import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
})