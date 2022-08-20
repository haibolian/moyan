import http from '@/utils/http'

const Api = {
  create: '/category/create',
  getList: '/category/getAll',
  del: '/category/del'
}

export const create = (data: any) => http.post(Api.create, data);
export const getList = (params?: any) => http.get(Api.getList, params);
export const del = (params?: any) => http.delete(Api.del, params);
