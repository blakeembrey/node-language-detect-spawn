var spawn  = require('language-spawn');
var detect = require('language-detect');

/**
 * Spawn any file in a known programming language.
 *
 * @param {String}   filename
 * @param {String}   args
 * @param {Object}   opts
 * @param {Function} done
 */
module.exports = function (filename) {
  var args     = Array.prototype.slice.call(arguments);
  var language = detect.filename(filename);

  return spawn.apply(null, [language].concat(args));
};
