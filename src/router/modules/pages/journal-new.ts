export default {
  path: '/journal/new',
  name: 'journal-new',
  component: () => import('@/views/journal/new.vue'),
  meta: {
    title: '新建日志',
  }
}