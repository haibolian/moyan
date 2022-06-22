import { 
  createRouter, 
  createWebHashHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'

import routes from './routes'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router