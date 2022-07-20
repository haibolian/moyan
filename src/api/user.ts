import http from '@/utils/http'

const Api = {
  login: '/users/login',
  registry: '/users/register',
  getUserInfo: '/users/getUserInfo',
}

export const login = (data: any) => http.post(Api.login, data)

export const registry = (data: any) => http.post(Api.registry, data)

export const getUserInfo = (params?: any) => http.get(Api.getUserInfo, params)
