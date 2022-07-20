import router from "@/router"
import { useUserStore } from '@/store/modules/user';
import { storageLocal, storageSession } from "@/utils/storage"
import { UserInfo } from './type'

const userStore = useUserStore();

export function init(data: UserInfo) {
  userStore.setUserInfo(data);
  userStore.setToken(data.accessToken);
  const target = storageSession.getItem('target')
  router.push(target !== '/login' && router.hasRoute(target) ? target : '/')
  storageSession.removeItem('target')
}
