import { 
  createRouter, 
  createWebHashHistory, 
  Router,
  RouteRecordRaw
} from 'vue-router'

// import Login from '@/views/login/index.vue'
const Login = () => import('@/views/login/index.vue')

const routes: RouteRecordRaw[]  = [
  {
    path: '/',
    redirect: "/login",
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router