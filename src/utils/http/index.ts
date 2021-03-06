import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'
import { MoyanRequestConfig } from './type.d'
import NProgress from 'nprogress';
import { ElLoading, ElLoadingService } from "element-plus"
import 'element-plus/es/components/loading/style/index';
import { storageLocal } from '../storage';

class MoyanHttp {
  public instance: AxiosInstance
  public actionConfig: MoyanRequestConfig
  public loading: any
  constructor(options: AxiosRequestConfig, actionConfig: MoyanRequestConfig = {
    withLoading: true
  }) {
    this.actionConfig = actionConfig
    this.instance = Axios.create(options)
    this.httpInterceptorRequest()
    this.httpInterceptorResponse()
  }
  private httpInterceptorRequest(): void {
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      this.loading = ElLoading.service({
        fullscreen: true,
      })
      NProgress.start();
      (config.headers as AxiosRequestHeaders).Authorization = 'Bearer ' + storageLocal.getItem('token');
      return config
    })
  }
  private httpInterceptorResponse() {
    this.instance.interceptors.response.use((response: AxiosResponse) => {
      NProgress.done()
      this.loading.close()
      return response.data
    }, (error: AxiosError) => {
      NProgress.done()
      return Promise.reject(error)
    })
  }
  public get(url: string, params?: any, config?: object): Promise<any> {
    return this.instance.get(url, { params, ...config })
  }

  public post(url: string, data: any, config?: object): Promise<any> {
    return this.instance.post(url, data, config)
  }

  public delete(url: string, params?: any, config?: object): Promise<any> {
    return this.instance.delete(url, { params, ...config })
  }
}

const httpConfig: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 5000,
}

const http = new MoyanHttp(httpConfig)

export default http