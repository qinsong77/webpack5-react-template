import { config as loadConfig } from 'dotenv'
import * as path from 'path'
import type { Configuration } from 'webpack'

export const ROOT_PATH = path.resolve(__dirname, '../')

export const NODE_ENV = process.env.NODE_ENV

export const IS_DEV = NODE_ENV === 'development'

const ENV_CONFIG_PATH = path.resolve(ROOT_PATH, 'env', `${NODE_ENV}.env`)

// node 读取env 配置
loadConfig({
  path: ENV_CONFIG_PATH,
})

export const PUBLIC_PATH = '/'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const DEV_PROXY: Configuration['devServer']['proxy'] = {
  '/api': {
    target: 'https://petstore3.swagger.io',
    changeOrigin: true,
    // pathRewrite: {'^/api' : ''}
  },
}
