/* eslint-disable */
const commonConfig = require('@modules/eslint');

module.exports = {
  ...commonConfig,
  env: {
    'cypress/globals': true
  },
  extends: [
    ...commonConfig.extends,
    'plugin:cypress/recommended',
  ],
  plugins: [
    ...commonConfig.plugins,
    'cypress',
  ],
  rules: {
    ...commonConfig.rules,
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
  }
}
