const IS_DEV = process.env.NODE_ENV === 'development'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        // https://babeljs.io/docs/babel-preset-env#corejs
        corejs: {
          version: 3,
          proposals: true, // 使用尚在提议阶段特性的 polyfill
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        development: IS_DEV,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [].concat(IS_DEV ? ['react-refresh/babel'] : []),
}
