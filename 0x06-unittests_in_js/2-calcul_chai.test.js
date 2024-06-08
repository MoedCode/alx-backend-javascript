const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    expect(calculateNumber('SUM', -2, 3)).to.equal(1);
    expect(calculateNumber('SUM', 2.5, 3.5)).to.equal(7);
  });

  it('should return the difference of two numbers', () => {
    expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 3, 5)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);
  });

  it('should return the division of two numbers', () => {
    expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
  });

  it('should return 0 for an invalid type', () => {
    expect(calculateNumber('INVALID', 2, 3)).to.equal(0);
    expect(calculateNumber('INVALID', -2, 3)).to.equal(0);
    expect(calculateNumber('INVALID', 2.5, 3.5)).to.equal(0);
  });
});
