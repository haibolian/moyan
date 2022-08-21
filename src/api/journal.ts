import http from '@/utils/http'

const Api = {
  publish: '/journal/publish',
  saveDraft: '/journal/saveDraft',
  getDraft: '/journal/getDraft',
  getJournal: '/journal/getJournal',
  getList: '/journal/getList',
  del: '/journal/del'
}

export const publish = (data: any) => http.post(Api.publish, data);
export const getList = (params?: any) => http.get(Api.getList, params);
export const getJournal = (params?: any) => http.get(Api.getJournal, params);
export const del = (params?: any) => http.delete(Api.del, params);
