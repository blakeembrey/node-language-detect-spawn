var fs     = require('fs');
var spawn  = require('../');
var path   = require('path');
var assert = require('assert');

describe('language-detect-spawn', function () {
  describe('language exists', function () {
    it('should spawn the file', function (done) {
      var file    = path.join(__dirname, 'fixtures', 'CoffeeScript.coffee');
      var data    = '';
      var process = spawn(file);

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

  describe('unknown language', function () {
    it('should emit an error', function (done) {
      var file    = path.join(__dirname, 'fixtures', 'FairyLand.fl');
      var process = spawn(file);

      process.on('error', function (err) {
        assert.ok(err);

        return done();
      });
    });
  });

  describe('file missing', function () {
    it('should allow the language to handle the error', function (done) {
      var file    = path.join(__dirname, 'fixtures', 'existence.js');
      var data    = '';
      var process = spawn(file);

      process.stderr.on('data', function (chunk) {
        data += chunk;
      });

      process.on('close', function (code) {
        assert(code !== 0);
        assert.ok(data);

        return done();
      });
    });
  });

  describe('arguments', function () {
    it('should pass through command line arguments', function (done) {
      var file    = path.join(__dirname, 'fixtures', 'C++.cpp');
      var data    = '';
      var value   = Math.random();
      var process = spawn(file, value);

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

  describe('options', function () {
    it('should spawn with an options object', function (done) {
      var cwd     = path.join(__dirname, '..');
      var data    = '';
      var file    = path.join(__dirname, 'fixtures', 'JavaScript.js');
      var process = spawn(file, null, { cwd: cwd });

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
