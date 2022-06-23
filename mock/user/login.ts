import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/user/login',
  method: 'post',
  timeout: 500,
  response: ({ query }) => {
    return {
      code: 200,
      data: {
        username: '用户123',
        accessToken: 'cxmlvkwiepruwoerij22wdxv.xzcsklefnsdmfnk23.nvkldufhf32woeijf2',
      },
      success: true,
      message: '登录成功',
    }
  }
} as MockMethod