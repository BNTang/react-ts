let BASE_URL = ''
// vite内置的环境变量 表示开发环境
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://127.0.0.1:8090'
} else {
  BASE_URL = 'http://www.it666.com:8090'
}

export const TIME_OUT = 3000
export { BASE_URL }
