import http from '@/utils/http'

const Api = {
  publish: '/speak/publish',
  getList: '/speak/getAll',
  del: '/speak/del'
}

export const publish = (data: any) => http.post(Api.publish, data);
export const getList = (params?: any) => http.get(Api.getList, params);

// export const del = (data: any) => http.post(Api.del, );


