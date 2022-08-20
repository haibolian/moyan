import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/api/category/getAll',
  method: 'get',
  timeout: 500,
  response: ({ query }) => {
    return {
      code: 200,
      data: [
        {
          id: '1',
          name: '前端',
          createdAt: '2021年1月2日 12:22:33',
        },
        {
          id: '2',
          name: '后端',
          createdAt: '2021年1月2日 12:22:33',
        },
        {
          id: '3',
          name: '数据库',
          createdAt: '2021年1月2日 12:22:33',
        }
      ],
      success: true,
      message: '获取成功',
    }
  }
} as MockMethod