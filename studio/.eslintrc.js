module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never'],
    'semi': 0,
    'comma-dangle': 0,
    'space-before-function-paren': ['warn', 'never'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6',
    },
  },
};
