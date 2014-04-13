# Language Detect Spawn

Automatically spawns a file in a known programming language based on [language-command](https://github.com/blakeembrey/node-language-command).

## Installation

```
npm install language-detect-spawn --save
```

## Usage

```javascript
var spawn = require('language-detect-spawn');

spawn('test.js', function (err, process) {
  process.stdout.on('data', console.log);
});
```

## License

MIT
