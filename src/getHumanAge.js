'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAge
 *
 * @returns {number[]}
 */
const { getHumanAge } = require('./your-code-file'); // Replace 'your-code-file' with the actual file path

describe('getHumanAge', () => {
  it('should return [0, 0] when catAge and dogAge are both 0', () => {
    const result = getHumanAge(0, 0);
    expect(result).to.deep.equal([0, 0]);
  });

  it('should return [0, 0] when catAge and dogAge are both 14', () => {
    const result = getHumanAge(14, 14);
    expect(result).to.deep.equal([0, 0]);
  });

  it('should return [1, 1] when catAge and dogAge are both 15', () => {
    const result = getHumanAge(15, 15);
    expect(result).to.deep.equal([1, 1]);
  });

  it('should return [1, 1] when catAge and dogAge are both 23', () => {
    const result = getHumanAge(23, 23);
    expect(result).to.deep.equal([1, 1]);
  });

  it('should return [2, 2] when catAge and dogAge are both 24', () => {
    const result = getHumanAge(24, 24);
    expect(result).to.deep.equal([2, 2]);
  });

  it('should return [2, 2] when catAge and dogAge are both 27', () => {
    const result = getHumanAge(27, 27);
    expect(result).to.deep.equal([2, 2]);
  });

  it('should return [3, 2] when catAge is 28 and dogAge is 28', () => {
    const result = getHumanAge(28, 28);
    expect(result).to.deep.equal([3, 2]);
  });

  it('should return [21, 17] when catAge is 100 and dogAge is 100', () => {
    const result = getHumanAge(100, 100);
    expect(result).to.deep.equal([21, 17]);
  });
});

