var spawn  = require('language-spawn');
var detect = require('language-detect');

/**
 * Spawn any file in a known programming language.
 *
 * @param {String}   file
 * @param {String}   args
 * @param {Object}   opts
 * @param {Function} done
 */
module.exports = function (file) {
  var done = arguments[arguments.length - 1];
  var args = Array.prototype.slice.call(arguments, 0, -1);

  // Attempt to detect the programming language. This will pass through an
  // error when the file doesn't exist and a possible language.
  return detect(file, function (err, language) {
    if (err) {
      return done(err);
    }

    if (!language) {
      return done(new Error('Unable to detect programming language'));
    }

    return done(null, spawn.apply(null, [language.name].concat(args)));
  });
};
