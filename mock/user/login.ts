import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/api/users/login',
  method: 'post',
  timeout: 500,
  response: ({ query }) => {
    return {
      code: 200,
      data: {
        username: '用户123',
        accessToken: 'cxmlvkwiepruwoerij22wdxv.xzcsklefnsdmfnk23.nvkldufhf32woeijf2',
        nickname: 'lingfun',
        avatar: 'https://avatars0.githubusercontent.com/u/8186664?s=460&v=4',
        motto: '我是一个坚持不懈的学习者'
      },
      success: true,
      message: '登录成功',
    }
  }
} as MockMethod