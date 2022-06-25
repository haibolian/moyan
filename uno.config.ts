import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  defineConfig,
  presetIcons,
  presetMini,
  presetUno
} from "unocss";

// https://github.com/unocss/unocss#readme
export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  theme: {
    colors: {
      'startColor': '#a6c1ee',
      'endColor': '#fbc2eb'
    }
  },
  shortcuts: {
    'overflow-ellipsis': 'whitespace-nowrap overflow-ellipsis overflow-hidden'
  },
  rules: 
  [
    // For example:
    // ['overflow-ellipsis', {
    //   'white-space': 'nowrap',
    //   'text-overflow': 'ellipsis',
    //   'overflow': 'hidden'
    // }]
  ]
});
