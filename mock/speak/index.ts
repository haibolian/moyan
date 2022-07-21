import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/api/speak/getAll',
  method: 'get',
  timeout: 500,
  response: ({ query }) => {
    return {
      "success": true,
      "message": "获取成功",
      "data": {
        "pageNum": 1,
        "pageSize": 10,
        "total": 21,
        "list": [
          {
            "id": 57,
            "content": "dddd",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:57",
            "commentCount": 3,
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          },
          {
            "id": 56,
            "content": "8888",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:53",
            "commentCount": 3,
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          },
          {
            "id": 55,
            "content": "6666",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:50",
            "commentCount": 3,
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          },
          {
            "id": 54,
            "content": "tttt",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:47",
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          },
          {
            "id": 53,
            "content": "fgh",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:43",
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          },
          {
            "id": 52,
            "content": "rty",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:41",
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          },
          {
            "id": 51,
            "content": "54",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:39",
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          },
          {
            "id": 50,
            "content": "gdf",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:37",
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          },
          {
            "id": 49,
            "content": "123",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:35",
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          },
          {
            "id": 48,
            "content": "qwe",
            "images": null,
            "from_id": "6",
            "created_at": "2022-07-13 22:17:34",
            "user": {
              "id": 6,
              "nickname": "用户ui34m8y8av4",
              "avatar": null
            }
          }
        ]
      }
    }
  }
} as MockMethod
