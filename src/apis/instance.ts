import axios from 'axios'
import { setLocalStorage } from 'utils/storage'

const API_BASE_URL = 'https://www.pre-onboarding-selection-task.shop'

const axiosApi = (url: string) => {
  const instance = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
  })

  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
    return config
  })

  instance.interceptors.response.use((response) => {
    const responseToken = response.data.access_token
    responseToken && setLocalStorage('accessToken', responseToken)
    return response
  })

  return instance
}

export const axiosInstance = axiosApi(API_BASE_URL)
