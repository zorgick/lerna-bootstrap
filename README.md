# Installation

1. To install dependencies in all packages use `lerna` tool with an appropriate
flag (either `-S` or `-D`);
2. To install dependencies in a specific package use lerna with an appropriate
flag (either `-S` or `-D`) and package name from package.json, as follows,
`yarn lerna add --scope=@stub/components`
2. To install dependencies in the root directory use can use yarn
`yarn add -W ...` (-W is a necessary flag for adding a dependency 
into the root package.json)
3. To create template package using common utils like CRA execute 
`yarn create` with a necessary command. For ex.,
`yarn create react-app modules/<packageName> --template typescript`

# Typescript configuration
- Separate configs are used
  - One for transpiling ts code into js (tsconfig.build.json)
  - Another for seamless navigation across whole monorepo (tsconfig.json)

# GIT Code of conduct

This monorepo has hooks enabled and tuned. There are currently these hooks:
1. `pre-commit` hook does:
  - linting, 
  - static type checking, 
  - testing,
  - changed codebase verification by a user
2. `prepare-commit-msg` hook launches commitizen that guides through 
commit creation steps
3. `commit-msg` hook lints a commit message
according to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
that are based on
[angular conventions](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)
4. `pre-push` hook runs smoke and E2E tests

**NB!** To trigger all the hooks in 100% cases you *MUST* use
your shell (bash is preferred)/cli (if on Windows, WSL[1|2] is preferred) 
instead of GUI

```sh
# this will launch pre-commit, prepare-commit-msg and commit-msg hooks
# provide a random string as a commit message, it will be neglected after 
# prepare-commit-msg
git commit -m 'asdfkjk'
```

Commit message must be structured as follows (pay attention to new lines) -
commitizen makes sure you follow to these conventions:


**SCHEME**
```
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

# TS configuration

*modules* workspaces are bundled by TS using `--build`` option.
When final programs are using code from modules workspaces, it is recommended to
execute `yarn observe` which will inspect all **built** workspaces for changes 
and recompile only changed pieces of the code.


**NOTE!** *modules* workspaces must be built before this command is run.


Each build with TS will generate a build cache (*.tsbuildinfo),
a file that helps TS to detect stale output files and to rebuild only them.
Executing `yarn observe` will remove this cache file to prevent
errors emerging from missing **build/** directory, when the source code 
remains unchanged, thus TS won't rebuild it.
