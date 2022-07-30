module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  globals: {},
  plugins: [],
  extends: [
    // ESLint
    'eslint:recommended',
    // TypeScript
    'plugin:@typescript-eslint/recommended',
    // React
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // Prettier
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
