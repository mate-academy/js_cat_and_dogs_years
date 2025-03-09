// eslint-disable-next-line strict
module.exports = {
  env: {
    browser: true, // Для роботи в браузері
    node: true, // Для роботи в Node.js
    jest: true,
  },
  extends: [
    'eslint:recommended', // Рекомендовані правила ESLint
    'plugin:react/recommended', // Рекомендації для React
    'plugin:jest/recommended', // Рекомендації для Jest
  ],
  plugins: [
    'react', // Плагін для React
    'jest', // Плагін для Jest
  ],
  rules: {
    'no-undef': 'error', // Строгіше правило для неоголошених змінних
    'jest/no-disabled-tests': 'warn', // Попередження для вимкнених тестів
    'jest/consistent-test-it': ['error', { 'fn': 'test' }], // Для consistency в тестах
  },
};
