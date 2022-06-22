import { RouteRecordRaw } from 'vue-router'

const modules = import.meta.globEager('./modules/*.ts')
const routes: RouteRecordRaw[]  = [
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
]

Object.entries(modules).forEach(([name, module]) => {
  const route = module.default
  routes.push(route)
})



export default routes