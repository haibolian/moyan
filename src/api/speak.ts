import http from '@/utils/http'

const Api = {
  publish: '/speak/publish',
  del: '/speak/del'
}

export const publish = (data: any) => http.post(Api.publish, data);

// export const del = (data: any) => http.post(Api.del, );


