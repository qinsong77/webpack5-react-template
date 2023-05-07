module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*'],
  env: {
    browser: true,
    node: true,
    // commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  globals: {},
  plugins: [
    // https://github.com/lydell/eslint-plugin-simple-import-sort/#example-configuration
    'simple-import-sort',
  ],
  extends: [
    // ESLint
    'eslint:recommended',
    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/recommended',
    'plugin:import/typescript',
    // TypeScript
    'plugin:@typescript-eslint/recommended',
    // React
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // Static AST checker for accessibility rules on JSX elements.
    'plugin:jsx-a11y/recommended',
    // test
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    // Prettier
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 'react/jsx-uses-react': 'off',
    // 'react/react-in-jsx-scope': 'off',

    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    // for eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
  overrides: [
    // override "simple-import-sort" config form https://dev.to/julioxavierr/sorting-your-imports-with-eslint-3ped
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
}
