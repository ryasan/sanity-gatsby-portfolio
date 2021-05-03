module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'node': true,
    'browser': true,
    'jest/globals': true,
  },
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  plugins: ['jest'],
};
