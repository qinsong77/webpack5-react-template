// @ts-expect-error no type
import FriendlyErrorsWebpackPlugin from '@soda/friendly-errors-webpack-plugin'
import { config as loadConfig } from 'dotenv'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as path from 'path'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import type { Configuration } from 'webpack'
import { DefinePlugin } from 'webpack'
import WebpackBar from 'webpackbar'

import {
  ENV_PREFIX,
  IS_DEV,
  REACT_APP_ENV,
  REACT_APP_PUBLIC_PATH,
  ROOT_PATH,
} from './config'
// import { handleProgress } from './utils/handleProgress'

// fix error: tsconfig-paths-webpack-plugin: Found no baseUrl in tsconfig.json, not applying tsconfig-paths-webpack-plugin
// https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32#issuecomment-491824372
delete process.env.TS_NODE_PROJECT

loadConfig({
  path: path.resolve(ROOT_PATH, 'env', `.env.${REACT_APP_ENV}`),
  debug: process.env.DEBUG === 'true',
})

const config: Configuration = {
  mode: 'production',
  cache: {
    type: 'filesystem', // 使用文件缓存
    name: `${process.env.NODE_ENV || 'development'}-cache`,
  },
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    // 相当于 clean-webpack-plugin
    clean: true,
    publicPath: REACT_APP_PUBLIC_PATH,
    path: path.resolve(__dirname, '../dist'),
    filename: IS_DEV
      ? 'js/[name].bundle.js'
      : 'js/[name].[contenthash:8].bundle.js',
    chunkFilename: IS_DEV
      ? 'js/[name].chunk.js'
      : 'js/[name].[contenthash:8].chunk.js',
    // 与 output.filename 相同，不过应用于 Asset Modules。
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  resolve: {
    // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    extensions: ['.tsx', '.ts', '.js', '.json'],
    // 创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块：
    // alias: {
    //   '@': path.resolve(__dirname, '../src'),
    // },
    plugins: [
      //https://www.npmjs.com/package/tsconfig-paths-webpack-plugin
      new TsconfigPathsPlugin({
        // https://snyk.io/advisor/npm-package/tsconfig-paths-webpack-plugin/example
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
  // loader的执行顺序默认从右到左，多个loader用[],字符串只用一个loader，也可以是对象的格式
  module: {
    rules: [
      // assets模块是webpack5自带,不用下载
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/,
        // https://webpack.docschina.org/guides/asset-modules#general-asset-type
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          filename: 'assets/images/[name].[hash][ext][query]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][hash][ext][query]',
        },
      },
      {
        test: /\.css$/i,
        use: [
          // 生产模式使用 mini-css-extract-plugin 插件分离 JS/CSS 文件实现并行加载，而开发环境选择 style-loader 它可以使用多个标签将 CSS 插入到 DOM 中，并且反应会更快。
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 1, // https://webpack.docschina.org/loaders/css-loader#importloaders
              //  todo 和tailwindcss冲突，加了tailwindcss就不work了
              // modules: {
              //   localIdentName: '[name]_[local]_[hash:base64:5]',
              // },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(ts|tsx|js|mjs|jsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        include: [path.resolve(__dirname, '../src')],
        // exclude: [/node_modules/, /public/, /(.|_)min\.js$/],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'webpack5 react app',
      description: 'webpack5 react app',
      publicPath: REACT_APP_PUBLIC_PATH,
      minify: {
        removeComments: true, // 删除注释
        collapseWhitespace: true,
        minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
        minifyJS: true, // 压缩 HTML 中出现的 JS 代码
      },
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configOverwrite: {
          exclude: ['**/*.test.*', '**/*.spec.*'],
        },
      },
    }),
    new FriendlyErrorsWebpackPlugin(),
    // eslint-disable-next-line import/namespace
    // new webpack.ProgressPlugin(handleProgress),
    new WebpackBar({
      // color: '#85d', // 默认green，进度条颜色支持HEX
      // basic: false, // 默认true，启用一个简单的日志报告器
      // profile: false, // 默认false，启用探查器。
    }),
    //  todo, 如果使用的某一个process.env.REACT_APP_XX，没有配置，则不会替换，会报错的
    new DefinePlugin(
      Object.keys(process.env)
        .filter((key) => key.startsWith(ENV_PREFIX))
        .reduce<Record<string, string>>((prev, envKey) => {
          prev[`process.env.${envKey}`] = JSON.stringify(
            process.env[envKey] ?? ''
          )
          return prev
        }, {})
    ),
  ],
}

export default config
