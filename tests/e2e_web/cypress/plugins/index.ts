/// <reference types="cypress" />
import codeCoverageTask from '@cypress/code-coverage/task';
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  codeCoverageTask(on, config);
  return config;
};
