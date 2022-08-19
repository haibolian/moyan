import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/api/journal/view',
  method: 'get',
  timeout: 500,
  response: ({ query }) => {
    return {
      code: 200,
      data: {
        id: '1',
        title: 'iKun 的觉悟',
        content: '# hi, here\n\n- 鸡\n- 你\n- 太\n- 美\n-\n',
        isDraft: false,
        editorMode: 'MD',
        tags: [],
        createdAt: '2021年1月2日 12:22:33',
        updatedAt: '2022年7月5日 19:21:51',
        user: {
          nickname: '袁华',
          username: 'yuanhua',
          avatar: 'https://avatars.githubusercontent.com/u/20502762?v=4',
        }
      },
      success: true,
      message: '',
    }
  }
} as MockMethod