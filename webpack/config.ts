import * as path from 'path'

export const ENV_PREFIX = 'REACT_APP_'
export const ROOT_PATH = path.resolve(__dirname, '../')

export const NODE_ENV = process.env.NODE_ENV
export const REACT_APP_ENV = process.env.REACT_APP_ENV

export const IS_DEV = NODE_ENV === 'development'

export const REACT_APP_PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH ?? '/'

export const DEV_PROXY = [
  {
    context: ['/api'],
    target: 'https://petstore3.swagger.io',
    changeOrigin: true,
    // pathRewrite: {'^/api' : ''}
  },
]
