
export default {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error',
  },
};

