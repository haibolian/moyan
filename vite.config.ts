import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    Unocss({
      theme: {
        colors: {
          'startColor': '#a6c1ee',
          'endColor': '#fbc2eb',
        }
      }
    })
  ],
})