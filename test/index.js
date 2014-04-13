var fs     = require('fs');
var spawn  = require('../');
var path   = require('path');
var assert = require('assert');

describe('language-detect-spawn', function () {
  describe('language exists', function () {
    it('should spawn the file', function (done) {
      var file = path.join(__dirname, 'fixtures', 'CoffeeScript.coffee');

      return spawn(file, function (err, process) {
        var data = '';

        process.stderr.on('data', done);

        process.stdout.on('data', function (chunk) {
          data += chunk;
        });

        process.on('close', function (code) {
          assert.equal(code, 0);
          assert.equal(data, 'Hello, world!\n');

          return done();
        });
      });
    });
  });

  describe('unknown language', function () {
    it('should return an error', function (done) {
      var file = path.join(__dirname, 'fixtures', 'FairyLand.fl');

      return spawn(file, function (err) {
        assert.ok(err);

        return done();
      });
    });
  });

  describe('file missing', function () {
    it('should return an error', function (done) {
      var file = path.join(__dirname, 'fixtures', 'MadeUp.mu');

      return spawn(file, function (err) {
        assert.ok(err);

        return done();
      });
    });
  });

  describe('arguments', function () {
    it('should pass through command line arguments', function (done) {
      var file  = path.join(__dirname, 'fixtures', 'C.c');
      var value = Math.random();

      return spawn(file, value, function (err, process) {
        var data = '';

        process.stderr.on('data', done);

        process.stdout.on('data', function (chunk) {
          data += chunk;
        });

        process.on('close', function (code) {
          assert.equal(code, 0);
          assert.equal(data, value + '\n');

          return done();
        });
      });
    });
  });

  describe('options', function () {
    it('should spawn with an options object', function (done) {
      var cwd  = path.join(__dirname, '..');
      var file = path.join(__dirname, 'fixtures', 'JavaScript.js');

      return spawn(file, null, {
        cwd: cwd
      }, function (err, process) {
        var data = '';

        process.stderr.on('data', done);

        process.stdout.on('data', function (chunk) {
          data += chunk;
        });

        process.on('close', function (code) {
          assert.equal(code, 0);
          assert.equal(data, cwd + '\n');

          return done();
        });
      });
    });
  });
});
