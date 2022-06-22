import Layout from '@/layout/index.vue'

export default {
  path: '/home',
  component: Layout,
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '首页',
        icon: 'el-icon-home'
      }
    }
  ]
}