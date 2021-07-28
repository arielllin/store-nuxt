import { setClient } from '@/api/apiClient'

export default function({ $axios }, inject) {
  // request interceptor
  $axios.interceptors.request.use(
    config => {
      return config
    },
    error => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  // response interceptor
  $axios.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  setClient($axios)
}
