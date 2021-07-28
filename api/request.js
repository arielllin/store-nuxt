import apiClient from './apiClient'

export const zomatoRequest = req => {
  const serviceApiPrefix = '/zomato-api'

  const headers = {}
  headers['user-key'] = process.env.USER_KEY
  req.headers = { ...headers }

  return apiClient.request({
    ...req,
    queryPath: req.url,
    url: `${serviceApiPrefix}${req.url}`
  })
}
