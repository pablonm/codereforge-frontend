import axios from 'axios'

const getToken = () => {
  try {
    return localStorage.getItem('idToken')
  } catch {
    return null
  }
}

const getAxios = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 3000,
  })
  instance.interceptors.request.use(
    config => {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: getToken(),
        },
      }
    },
    error => {
      return Promise.reject(error)
    }
  )
  return instance
}

export default getAxios
