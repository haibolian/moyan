// 拼接域名
const {
  VITE_PROXY_DOMAIN_REAL
} = import.meta.env

export const getImg = (url: string = '') => {
  return VITE_PROXY_DOMAIN_REAL + url
}