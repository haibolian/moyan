import http from '@/utils/http'

const Api = {
  login: '/user/login',
  registry: '/user/registry'
}

export const login = (data: any) => http.post(Api.login, data)

export const registry = (data: any) => http.post(Api.registry, data)

