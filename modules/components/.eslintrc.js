/* eslint-disable */
const commonConfig = require('@modules/eslint');

module.exports = {
  ...commonConfig,
  overrides: [
    {
      files: [
        '**/*.stories.*'
      ],
      rules: {
        'import/no-anonymous-default-export': 'off'
      }
    }
  ]
}
