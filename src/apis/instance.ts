import axios from 'axios'

const API_BASE_URL = 'https://www.pre-onboarding-selection-task.shop'

const axiosApi = (url: string) => {
  return axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const axiosInstance = axiosApi(API_BASE_URL)
