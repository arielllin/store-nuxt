import { setClient } from '@/api/apiClient'

export default function({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  // api.setBaseURL('https://my_api.com')

  // Inject to context as $api
  // inject('api', api)

  // request interceptor
  api.interceptors.request.use(
    config => {
      return config
    },
    error => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  // response interceptor
  api.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  setClient(api)
}
