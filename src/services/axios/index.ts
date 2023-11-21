import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 15 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((req) => req)
axiosInstance.interceptors.response.use((res) => res?.data)

export const createRequest = <TReq, TResp = unknown>(
  _: string,
  requestConfigCreator: (args: TReq) => AxiosRequestConfig
) => {
  return (args: TReq, customerConfig?: Pick<AxiosRequestConfig, 'headers'>) => {
    const apiConfig = requestConfigCreator(args)
    return axiosInstance.request<TResp>({
      ...apiConfig,
      ...customerConfig,
      headers: {
        ...apiConfig.headers,
        ...customerConfig?.headers,
      },
    }) as unknown as Promise<TResp> // todo type
  }
}
