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
	css: {
		preprocessorOptions: {
			scss: {
				// 自定义的主题色
				additionalData: `@use "@/style/element/index.scss" as *;`,
			},
		},
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: "sass",
      })]
    }),
    Unocss(),
    viteMockServe({
      mockPath: './mock',
      logger: false
    })
  ],
})