/* eslint-disable */
const commonConfig = require('@modules/eslint');

module.exports = {
  ...commonConfig,
  settings: {
    "import/resolver": {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    },
  },
}
