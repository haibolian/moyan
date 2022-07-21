import http from '@/utils/http'

const Api = {
  publish: '/comment/publish',
  getList: '/comment/getAll',
  del: '/comment/del'
}

export const publish = (data: any) => http.post(Api.publish, data);
export const getList = (params?: any) => http.get(Api.getList, params);
export const del = (params?: any) => http.delete(Api.del, params);
