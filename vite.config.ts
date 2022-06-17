import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'


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
    }),
    viteMockServe({
      mockPath: './mock',
      logger: false
    })
  ],
})