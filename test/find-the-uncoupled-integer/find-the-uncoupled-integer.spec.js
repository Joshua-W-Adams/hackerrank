var assert = require('assert');
var processData = require('./../../src/find-the-uncoupled-integer/find-the-uncoupled-integer.js').processData;

describe('Find the uncoupled integer', function() {

  describe('#processData()', function() {
    it('should return 3 for the first hackerrank example', function() {
      assert.equal(processData('1, 2, 3, 1, 2'),3);
    });
    it('should return 99 for the second hackerrank example', function() {
      assert.equal(processData('1, 2, 3, 4, 5, 99, 1, 2, 3, 4, 5'),99);
    });
  });

});
