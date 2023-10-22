import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import type { Configuration } from 'webpack'
import { default as merge } from 'webpack-merge'

import 'webpack-dev-server'

import { DEV_PROXY } from './config'
import commonConfig from './webpack.common'

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const openBrowser = require('./utils/openBrowser.js')

const config: Configuration = merge(commonConfig, {
  mode: 'development',
  // https://webpack.docschina.org/configuration/cache/
  cache: { type: 'filesystem' },
  devtool: 'eval-cheap-module-source-map',
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: [
      '**/node_modules',
      '**/*.test.*',
      '**/*.spec.*',
      'dist/**/*',
      'coverage/**/*',
    ],
  },
  devServer: {
    hot: true,
    // open: true,
    static: {
      // directory: path.join(__dirname, './dist'),
    },
    port: 3010,
    // 当使用 [HTML5 History API] 时，任意的 `404` 响应被替代为 `index.html`
    historyApiFallback: true,
    // 是否启用gzip压缩
    compress: true,
    client: {
      logging: 'info',
      progress: true,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    proxy: DEV_PROXY,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
})

export default config
