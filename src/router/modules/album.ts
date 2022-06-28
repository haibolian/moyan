import Layout from '@/layout/index.vue'

export default {
  path: '/album',
  component: Layout,
  children: [
    {
      path: '',
      name: 'album',
      component: () => import('@/views/album/index.vue'),
      meta: {
        title: '说说',
        icon: 'el-icon-album'
      }
    }
  ]
}