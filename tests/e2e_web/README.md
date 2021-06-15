## Tests

| Type | Location                                 |
| ---- | ---------------------------------------- |
| api  | [cypress/integration/api](./cypress/integration/api) |
| ui   | [cypress/integration/ui](./cypress/integration/ui)   |

## Code Coverage Report

Cypress uses the
[@cypress/code-coverage](https://github.com/cypress-io/code-coverage) plugin
to generate code coverage reports for the [web package](../../packages/web) app.

To generate a code coverage report:

1. Run `yarn cypress:run --env coverage=true` and wait for the test run to complete.
2. Once the test run is complete, you can view the report at
`coverage/lcov-report/index.html`.
