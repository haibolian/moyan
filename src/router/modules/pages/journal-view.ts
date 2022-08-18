export default {
  path: '/journal/view/:id',
  name: 'JournalView',
  component: () => import('@/views/journal/view.vue'),
  meta: {
    title: '日志详情',
  }
}