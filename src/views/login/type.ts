export type UserInfo = {
  username: string;
  nickname: string;
  avatar: string;
  motto: string;
  accessToken: string;
}

export interface LoginResult {
  data: UserInfo,
  message: string,
  success: boolean
}
