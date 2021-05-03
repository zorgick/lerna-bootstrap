# Installation

1. To install dependencies in all packages use `lerna` tool with an appropriate
flag (either `-S` or `-D`);
2. To install dependencies in a specifix package use lerna with an appropriate
flag (either `-S` or `-D`) and package name from package.json, as follows,
`yarn lerna add --scope=@stub/components`
3. To create template package using common utils like CRA execute 
`yarn create` with a necessary command. For ex.,
`yarn create react-app modules/<packageName> --template typescript`

# GIT Code of conduct

This monorepo has hooks enabled and tuned. There are currently 3 hooks
1. `pre-commit` hook does:
  - linting, 
  - static type checking, 
  - testing,
  - changed codebase verification by a user
2. `commit-msg` hook lints a commit message
according to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
that are based on
[angular conventions](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)
3. `pre-push` hook runs smoke and E2E tests

**NB!** To trigger all the hooks in 100% cases you *MUST* use
your shell (bash is preferred)/cli (if on Windows, WSL[1|2] is preferred) 
instead of GUI

```sh
# this will launch pre-commit and commit-msg hooks
git commit -m 'feat: Use shell to commit changes'
```


Commit message must be structured as follows (pay attention to new lines):


**SCHEME**
```
<type>[optional scope]: <description>


[optional body]


[optional footer(s)]
```


**EXAMPLE**
```
build(common): Set up commit messages linting


Use commintlint/cli to lint the message according to
conventional commits 


# If you use an issue tracker (e.g., github issues or Jira),
# put references to them at the footer, like this:

Resolves: #123
See also: #456, #789
```
