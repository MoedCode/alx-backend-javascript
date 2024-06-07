const assert = require('chai').assert;
const { should } = require('chai');
const calculateNumber = require('./0-calcul.js');
// calculateNumber => should return rounded some of tow numbers
describe('calculateNumber', function () {
  it('1, 3 => 4 ', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('1, 3.7 => 5', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('1.2, 3.7 => 5', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('1.5, 3.7 => 6 ', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
