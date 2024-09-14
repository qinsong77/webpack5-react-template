import Axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { toast } from 'sonner'

const AXIOS_INSTANCE = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '',
  timeout: 15 * 1000,
  adapter: 'fetch',
  headers: {
    'Content-Type': 'application/json',
  },
})

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json'
  }

  config.withCredentials = true
  return config
}

AXIOS_INSTANCE.interceptors.request.use(authRequestInterceptor)
AXIOS_INSTANCE.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const message = error.response?.data?.message || error.message
    toast.error('Error', {
      description: message,
      duration: Infinity,
      closeButton: true,
    })

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams()
      const redirectTo = searchParams.get('redirectTo')
      window.location.href = `/auth/login?redirectTo=${redirectTo}`
    }

    return Promise.reject(error)
  }
)

export const createRequest = <T>(config: AxiosRequestConfig): Promise<T> => {
  return AXIOS_INSTANCE(config).then(({ data }) => data)
}
