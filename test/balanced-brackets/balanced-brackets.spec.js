var assert = require('assert');
var processData = require('./../../src/balanced-brackets/balanced-brackets.js').processData;

describe('Balanced Brackets', function() {

  describe('#processData()', function() {
    it('should return False when one bracket is passed', function() {
      assert.equal(processData('('),'False');
    });
    it('should return True when a pair of brackets is passed', function() {
      assert.equal(processData('()'),'True');
    });
    it('should return True for all hackerrank example balanced deliminter strings', function() {
      assert.equal(processData('()[]{}'),'True');
      assert.equal(processData('([{}])'),'True');
      assert.equal(processData('([]{})'),'True');
    });
    it('should return False for all hackerrank example invalid strings', function() {
      assert.equal(processData('([)]'),'False');
      assert.equal(processData('([]'),'False');
      assert.equal(processData('[])'),'False');
      assert.equal(processData('([})'),'False');
    });
  });

});
