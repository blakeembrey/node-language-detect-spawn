# Language Detect Spawn

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
