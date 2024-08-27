import merge from 'webpack-merge'
import prodConfig from './webpack.production'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export default merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
})
