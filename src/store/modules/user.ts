import { defineStore } from 'pinia';
import { storageLocal } from "@/utils/storage"
import { getUserInfo } from '@/api/user';
import { errorMessage } from '@/utils/message'

export const useUserStore = defineStore({
  id: 'user',
  // 在 Pinia 中，状态被定义为返回初始状态的函数。
  state: () => ({
    userInfo: {
      username: '',
      nickname: '',
      avatar: '',
      motto: '',
    },
    token: '',
    status: '',
    setting: {}
  }),
  actions: {
    setUserInfo({accessToken, ...userInfo}){
      this.userInfo = userInfo;
    },
    updateUserInfo(userInfo = {}){
      Object.assign(this.userInfo, userInfo)
    },
    setToken(token: string) {
      this.token = token;
      storageLocal.setItem('token', token)
    },
    async getAndSetUser() {
      const { data, success, message } = await getUserInfo()
      if(success) {
        this.setUserInfo(data)
      }else {
        errorMessage(message);
      }
    }
  }
})