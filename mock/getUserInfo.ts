import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/user/getUserInfo',
  method: 'get',
  response: ({ query }) => {
    return {
      code: 200,
      data: {
        name: 'vite',
        age: 18,
      }
    }
  }
}