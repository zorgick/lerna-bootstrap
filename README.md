## Getting started

Lerna-bootstrap is a multitool monorepo that makes it easy to launch any web-based
project. It includes linting, static type checking, unit | integration | e2e
tests setup, ui kit, storybook, CRA, tsnode, MySQL, NextJS, Xstate, MST and
many more solutions that are necessary for a fullstack development.

The app is bundled primarily with the typescript built in transpiler with the
support of cold start type definitions of any workspaces piece of code. Third
party solutions, such as CRA or Nextjs, in this monorepo use their own bundler.

The monorepo consists of several workspaces groups:

| Group    | Description                                                                                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modules  | [modules](./modules) - any sort of code that can be shared between projects, e.g. ui kits, utils, etc.                                                                                   |
| packages | [packages](./packages) - final product, that can be deployed on the server as an application. Codebase from this workspace is ideally constructed of modules and state workspaces code.  |
| tests    | [tests](./tests) - unit / integration / e2e tests of any present in other workspaces codebase.                                                                                           |
| state    | [state](./state) - data containers, state management solution for the applications in packages workspace.                                                                                |

> 🚩 **Note**
> 
> You can choose any comfortable way of working with this monorepo either
> by cutting out any piece of code for your needs or by choosing any package 
> as your main product and using all the power of this monorepo to develop it.

## Installation

1. To install dependencies in all packages use `lerna` tool with an appropriate
flag (either `-S` or `-D`);
2. To install dependencies in a specific package use lerna with an appropriate
flag (either `-S` or `-D`) and package name from package.json, as follows,
`yarn lerna add --scope=@modules/components`
3. To install dependencies in the root directory use yarn
`yarn add -W ...` (-W is a necessary flag for adding a dependency 
into the root package.json)
4. To create a template package using common utils like CRA execute 
`yarn create` with a necessary command. For ex.,
`yarn create react-app packages/<packageName> --template typescript`

## NPM scripts

| Type                  | Description                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------- |
| `setup`               | Installs dependencies and links all workspaces by hoisting them in root node_modules          |
| `story`               | Launches storybook for [components](./modules/components)                                     |
| `start`               | Starts dev server in [packages](./packages) workspace group                                   |
| `start:web`           | Starts dev server in [packages/web](./packages/web) workspace                                 |
| `build`               | Launches build process in all workspaces                                                      |
| `build:modules`       | Launches build process in [modules](./modules) workspace group                                |
| `cypress:web`         | Opens Cypress runner                                                                          |
| `lint`                | Runs lint in all workspaces                                                                   |
| `types:check`         | Runs `build:modules` and executes static type checks                                          |
| `test:components`     | Runs unit tests in [components](./modules/components)                                         |
| `test:web`            | Starts dev server in [packages/web](./packages/web) workspace and runs `cypress:web`          |
| `observe`             | Inspects all **built** workspaces for changes and recompiles only changed pieces of the code  |
| `prepare`             | Initializes husky hooks and runs prepare script in all workspaces                             |


## Typescript configuration

- Separate configs are used
  - One for transpiling ts code into js (tsconfig.build.json)
  - Another for seamless navigation across the whole monorepo (tsconfig.json)
- *modules* workspace is bundled by TS using `--build`` option.
When final products use the code from *modules* workspace, it is recommended to
execute `yarn observe`, which will inspect all **built** workspaces for changes 
and recompile only changed pieces of the code.

> 🚩 **Note**
>
> *modules* workspace must be built before this command is run.

- To launch ts checks execute `yarn types:check`. It builds all packages
and then runs ts static analyzer.

> 🚩 **Note**
>
> this script MUST be run from the root. The packages may depend on 
> other packages, so built dependencies are needed for a correct functioning of
> the static analyzer.


## Linting

To lint all packages and modules use `yarn lint` command.


To autofix some minor code style errors from the monorepo root use
*double escaping*, e.g., `yarn lint -- -- --fix` - the first escapes are
used for yarn, the second escapes are used for lerna cli. (see example in
lint-staged config)


## GIT Code of conduct

This monorepo has hooks enabled and tuned. There are currently these hooks:
1. `pre-commit` hook, that runs:
  - linting, 
  - changed codebase verification by a user
2. `prepare-commit-msg` hook launches commitizen that guides through 
commit creation steps
3. `commit-msg` hook lints a commit message
according to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
that are based on
[angular conventions](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)
4. `pre-push` hook runs
  - smoke tests,
  - static type checking,
  - testing,

**NB!** To trigger all the hooks in 100% cases you *MUST* use
your shell (bash is preferred)/cli (if on Windows, WSL[1|2] is preferred) 
instead of GUI

```sh
# this will launch pre-commit, prepare-commit-msg and commit-msg hooks
# provide a random string as a commit message, it will be neglected after 
# prepare-commit-msg

git commit -m 'a'
```

Commit message must be structured as follows (pay attention to new lines) -
commitizen makes sure you follow to these conventions:


**SCHEME**
```sh
<type>[optional scope]: <description>


[optional body]


[optional footer(s)]
```


**EXAMPLE**
```sh
build(common): Set up commit messages linting


Use commintlint/cli to lint the message according to
conventional commits 


# If you use an issue tracker (e.g., github issues or Jira),
# put references to them at the footer, like this:

Resolves: 123
See also: 456, 789
```
