export default {
  path: '/journal/new/:id?',
  name: 'JournalNew',
  component: () => import('@/views/journal/new.vue'),
  meta: {
    title: '新建日志',
  }
}