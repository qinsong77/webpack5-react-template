import CopyWebpackPlugin from 'copy-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import type { Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import merge from 'webpack-merge'

// import InlineRuntimeChunkPlugin from './plugins/inline-runtime-chunk-html'
import commonConfig from './webpack.common'

const config: Configuration = {
  mode: 'production',
  cache: { type: 'filesystem', buildDependencies: { config: [__filename] } },
  optimization: {
    minimize: true, //开启压缩
    moduleIds: 'deterministic', //单独模块id，模块内容变化再更新
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all', // 匹配的块的类型：initial（初始块），async（按需加载的异步块），all（所有块）
      automaticNameDelimiter: '-',
      // todo enhancement
      cacheGroups: {
        // 项目第三方组件
        vendor: {
          name: 'vendors',
          enforce: true, // ignore splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        // 项目公共组件
        default: {
          minSize: 0, // 分离后的最小块文件大小默认3000
          name: 'common', // 用以控制分离后代码块的命名
          minChunks: 3, // 最小共用次数
          priority: 10, // 优先级，多个分组冲突时决定把代码放在哪块
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '',
          globOptions: {
            ignore: process.env.MSW_ENABLE
              ? ['**/index.html']
              : ['**/mockServiceWorker.js', '**/index.html'],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
      // 常遇到如下警告，Conflicting order. Following module has been added:…。
      // 此警告意思为在不同的js中引用相同的css时，先后顺序不一致。也就是说，在1.js中先后引入a.css和b.css，而在2.js中引入的却是b.css和a.css，此时会有这个warning。
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    // new InlineRuntimeChunkPlugin(),
    process.env.analyzer &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
      }),
  ].filter(Boolean),
}

export default merge(commonConfig, config)
