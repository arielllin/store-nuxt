let client

export const setClient = newClient => {
  client = newClient
}

// Request helpers
const reqMethods = [
  'request',
  'delete',
  'get',
  'head',
  'options', // url, config
  'post',
  'put',
  'patch' // url, data, config
]

const apiClient = reqMethods.reduce((acc, method) => {
  acc[method] = (...argu) => {
    if (!client) throw new Error('apiClient not installed')
    return client[method](...argu)
  }
  return acc
}, {})

export default apiClient
