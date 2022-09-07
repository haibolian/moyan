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
      'endColor': '#fbc2eb',
    }
  },
  shortcuts: {
    'test-overflow-ellipsis': 'whitespace-nowrap  text-ellipsis overflow-hidden',
    'my-card': 'p-15px bgcvar-my-bgc-normal rounded-2xl mb-20px'
  },
  rules: 
  [
    [/^colorvar-(\S+)$/, ([, d]) => ({ color: `var(--${d})` })],
    [/^bgcvar-(\S+)$/, ([, d]) => ({ background: `var(--${d})` })],
    ['avatar-shadow', {
      'box-shadow': '0px 0px 0px 5px #fff'
    }],
    ['avatar-dark-shadow', {
      'box-shadow': '0px 0px 0px 5px #888'
    }]
    // For example:
    // ['overflow-ellipsis', {
    //   'white-space': 'nowrap',
    //   'text-overflow': 'ellipsis',
    //   'overflow': 'hidden'
    // }]
  ]
});
