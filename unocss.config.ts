import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  defineConfig,
  presetMini,
  presetUno
} from "unocss";

// https://github.com/unocss/unocss#readme
export default defineConfig({
  theme: {
    colors: {
      'startColor': '#a6c1ee',
      'endColor': '#fbc2eb'
    }
  },
  rules: 
  [
    ['overflow-ellipsis', {
      'white-space': 'nowrap',
      'text-overflow': 'ellipsis',
      'overflow': 'hidden'
    }]
  ]
});
