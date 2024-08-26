import { config as loadConfig } from 'dotenv'
import * as path from 'path'
import type { Configuration } from 'webpack'

export const ROOT_PATH = path.resolve(__dirname, '../')

export const NODE_ENV = process.env.NODE_ENV

export const IS_DEV = NODE_ENV === 'development'

const ENV_CONFIG_PATH = path.resolve(ROOT_PATH, 'env', `.env.${NODE_ENV}`)

loadConfig({
  path: ENV_CONFIG_PATH,
  debug: process.env.DEBUG === 'true',
})

export const envKeys = ['NODE_ENV', 'PUBLIC_PATH', 'MSW_ENABLE', 'API_BASE_URL'] // todo: coupled with env

export const PUBLIC_PATH = process.env.PUBLIC_PATH ?? '/'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const DEV_PROXY: Configuration['devServer']['proxy'] = [
  {
    context: ['/api'],
    target: 'https://petstore3.swagger.io',
    changeOrigin: true,
    // pathRewrite: {'^/api' : ''}
  },
]
