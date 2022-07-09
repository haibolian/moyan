import http from '@/utils/http'

const Api = {
  login: '/users/login',
  registry: '/users/register'
}

export const login = (data: any) => http.post(Api.login, data)

export const registry = (data: any) => http.post(Api.registry, data)

