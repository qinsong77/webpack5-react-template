// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssPresetEnv = require('postcss-preset-env')
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const postcssNormalize = require('postcss-normalize') // 用tailwindcss应该用不上这个了

// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssImport = require('postcss-import')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    postcssImport,
    [
      // // 参考 browserslist 的浏览器兼容表自动对那些还不支持的现代 CSS 特性做转换
      postcssPresetEnv({
        // 自动添加浏览器头
        autoprefixer: {
          // will add prefixes only for final and IE versions of specification
          flexbox: 'no-2009',
        },
        stage: 3,
      }),
    ],
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss/nesting')(require('postcss-nesting')),
    tailwindcss,
    // 根据 browserslist 自动导入需要的 normalize.css 内容
    // postcssNormalize({ forceImport: true }),
    // require('postcss-flexbugs-fixes'),
  ],
}
