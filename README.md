# Language Detect Spawn

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

Automatically spawn a file in a known programming language based on the filename from [language-command](https://github.com/blakeembrey/node-language-command).

## Installation

```
npm install language-detect-spawn --save
```

## Usage

```javascript
var spawn   = require('language-detect-spawn');
var process = spawn('test.js');

process.stdout.on('data', console.log);
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/language-detect-spawn.svg?style=flat
[npm-url]: https://npmjs.org/package/language-detect-spawn
[travis-image]: https://img.shields.io/travis/blakeembrey/node-language-detect-spawn.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/node-language-detect-spawn
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/node-language-detect-spawn.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/node-language-detect-spawn?branch=master
[gittip-image]: https://img.shields.io/gittip/blakeembrey.svg?style=flat
[gittip-url]: https://www.gittip.com/blakeembrey
