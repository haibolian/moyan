import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts'
    })
  ],
})