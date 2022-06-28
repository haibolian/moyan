import Layout from '@/layout/index.vue'

export default {
  path: '/todo',
  component: Layout,
  children: [
    {
      path: '',
      name: 'todo',
      component: () => import('@/views/todo/index.vue'),
      meta: {
        title: '说说',
        icon: 'el-icon-todo'
      }
    }
  ]
}