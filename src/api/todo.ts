import http from '@/utils/http'

const Api = {
  create: '/todo/create',
  getList: '/todo/getList',
  del: '/todo/del',
  update: '/todo/update',
  getTodoTagMap: '/todo/getTodoTagMap'
}

export const create = (data?: any) => http.post(Api.create, data);
export const getList = (params?: any) => http.get(Api.getList, params);
export const update = (data: any) => http.post(Api.update, data);
export const del = (params?: any) => http.delete(Api.del, params);
export const getTodoTagMap = (params?: any) => http.get(Api.getTodoTagMap, params);
