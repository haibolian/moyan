import Layout from '@/layout/index.vue'

export default {
  path: '/journal',
  component: Layout,
  children: [
    {
      path: '',
      name: 'journal',
      component: () => import('@/views/journal/index.vue'),
      meta: {
        title: '日志',
        icon: 'el-icon-journal'
      }
    }
  ]
}