module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*'],
  env: {
    browser: true,
    node: true,
    // commonjs: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  globals: {},
  plugins: [],
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
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 'prettier/prettier': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'],
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 'off',

    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-dom)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',

    // 'react/react-in-jsx-scope': 'off',

    'jsx-a11y/anchor-is-valid': 'off',

    '@typescript-eslint/no-unused-vars': ['error'],

    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],

    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
}
