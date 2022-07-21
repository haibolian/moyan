import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/api/comment/getAll',
  method: 'get',
  timeout: 500,
  response: ({ query }) => {
    return {
      "success": true,
      "message": "获取成功",
      "data": {
        "pageNum": 1,
        "pageSize": 10,
        "total": 1,
        "list": [{
          id: 1,
          name: '凌凡',
          time: '2022年6月28日  11:22',
          to: null,
          content: '博主，你好！',
          reply: [
            {
              id: 1,
              name: '博主',
              time: '2022年6月28日  11:22',
              to: '凌凡',
              content: '凌凡，你好！'
            },
            {
              id: 2,
              name: '凌凡',
              time: '2022年6月28日  11:22',
              to: '博主',
              content: '你竟然回复我了，好开心'
            }
          ]
        },{
          id: 1,
          name: '凌凡',
          time: '2022年6月28日  11:22',
          to: null,
          content: '博主，你好！',
          reply: [
            {
              id: 1,
              name: '博主',
              time: '2022年6月28日  11:22',
              to: '凌凡',
              content: '凌凡，你好！'
            },
            {
              id: 2,
              name: '凌凡',
              time: '2022年6月28日  11:22',
              to: '博主',
              content: '你竟然回复我了，好开心'
            }
          ]
        },{
          id: 1,
          name: '凌凡',
          time: '2022年6月28日  11:22',
          to: null,
          content: '博主，你好！'
        }]
      }
    }
  }
} as MockMethod
