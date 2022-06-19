import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/user/login',
  method: 'post',
  response: ({ query }) => {
    return {
      code: 200,
      data: {
        token: 'cxmlvkwiepruwoerij22wdxv.xzcsklefnsdmfnk23.nvkldufhf32woeijf2',
      },
      success: true,
      message: '登录成功',
    }
  } 
} as MockMethod