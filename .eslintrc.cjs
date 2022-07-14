module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-promise-executor-return': 'off',
    'prefer-promise-reject-errors': 'off',
    'func-names': 'off',
    'linebreak-style': 0,
  },
  /* eslint linebreak-style: ["error", "unix"] */
};
