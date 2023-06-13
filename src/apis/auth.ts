import { axiosInstance } from './instance'

/** 회원가입 */
export const SIGNUP = (data: object) => axiosInstance.post('/auth/signup', data)

/** 로그인 */
export const SIGNIN = (data: object) => axiosInstance.post('/auth/signin', data)
