# is-cli
[![](https://img.shields.io/npm/v/is-cli.svg?style=flat)](https://www.npmjs.org/package/is-cli) [![](https://img.shields.io/npm/dm/is-cli.svg)](https://www.npmjs.org/package/is-cli)

Returns `true` if the current module was ran directly by `node` and not imported by another module. This is useful for CLI-style modules that also export values.

## Usage

```bash
npm i is-cli
```

```js
const isCLI = require("is-cli")(module);
// => true
```

Will throw when `module` is absent.


© [silverwind](https://github.com/silverwind), distributed under BSD licence
