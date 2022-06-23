import { storageLocal, storageSession } from '@/utils/storage'
import {
  createRouter,
  createWebHistory,
  Router,
} from 'vue-router'

import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = storageLocal.getItem('token')

  if (token) {
    if (to.path === '/login') return next('/')
    next()
  } else {
    const target = storageSession.getItem('target')
    if (!target) storageSession.setItem('target', to.path)
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
