import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/api/category/create',
  method: 'post',
  timeout: 500,
  response: ({ query }) => {
    return {
      code: 200,
      data: {
        id: '4',
        name: '测试',
      },
      success: true,
      message: '获取成功',
    }
  }
} as MockMethod