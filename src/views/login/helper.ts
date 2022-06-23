import router from "@/router"
import { storageLocal, storageSession } from "@/utils/storage"

export function init(data: any) {
  storageLocal.setItem('token', data.accessToken)
  storageLocal.setItem('username', data.username)
  const target = storageSession.getItem('target')
  router.push(target !== '/login' && router.hasRoute(target) ? target : '/')
  storageSession.removeItem('target')
}
