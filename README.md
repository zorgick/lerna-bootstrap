# Installation

1. To install dependencies in all packages use `lerna` tool with an appropriate
flag (either `-S` or `-D`);
2. To install dependencies in a specifix package use lerna with an appropriate
flag (either `-S` or `-D`) and package name from package.json, as follows,
`yarn lerna add --scope=@stub/components`
3. To create template package using common utils like CRA execute 
`yarn create` with a necessary command. For ex.,
`yarn create react-app modules/<packageName> --template typescript`
