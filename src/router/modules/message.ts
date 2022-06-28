import Layout from '@/layout/index.vue'

export default {
  path: '/message',
  component: Layout,
  children: [
    {
      path: '',
      name: 'message',
      component: () => import('@/views/message/index.vue'),
      meta: {
        title: '说说',
        icon: 'el-icon-message'
      }
    }
  ]
}