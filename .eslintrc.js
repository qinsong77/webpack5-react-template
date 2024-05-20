/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*', 'src/components/ui'],
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
    // https://www.npmjs.com/package/eslint-plugin-react-refresh
    'react-refresh',
    // https://react.dev/learn/react-compiler#installing-eslint-plugin-react-compiler
    'eslint-plugin-react-compiler',
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
    // Prettier
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      // # You will also need to install and configure the TypeScript resolver
      // # See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
      typescript: true,
      node: true,
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': 'error',
    // 'react/jsx-uses-react': 'off',
    // 'react/react-in-jsx-scope': 'off',

    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    // for eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    'react-refresh/only-export-components': 'warn',

    'react-compiler/react-compiler': 'error',
  },
  overrides: [
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      excludedFiles: ['e2e/**'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
    {
      files: ['e2e/**/*.spec.ts'],
      extends: ['plugin:playwright/recommended'],
    },
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
