import Layout from '@/layout/index.vue'

export default {
  path: '/speak',
  component: Layout,
  children: [
    {
      path: '',
      name: 'speak',
      component: () => import('@/views/speak/index.vue'),
      meta: {
        title: '说说',
        icon: 'el-icon-speak'
      }
    }
  ]
}