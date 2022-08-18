import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/api/journal/publish',
  method: 'post',
  timeout: 500,
  response: ({ query }) => {
    return {
      code: 200,
      data: {
        id: '1'
      },
      success: true,
      message: '发表成功',
    }
  }
} as MockMethod