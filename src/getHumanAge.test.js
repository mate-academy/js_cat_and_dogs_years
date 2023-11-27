'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return [0, 0] for catAge and dogAge both being 0', () => {
    const result = getHumanAge(0, 0);
    expect(result).toEqual([0, 0]);
  });

  test('should return [0, 0] for catAge and dogAge both being less than 15', () => {
    const result = getHumanAge(14, 14);
    expect(result).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge and dogAge both being 15', () => {
    const result = getHumanAge(15, 15);
    expect(result).toEqual([1, 1]);
  });

  test('should return [1, 1] for catAge and dogAge both being between 15 and 23', () => {
    const result = getHumanAge(23, 23);
    expect(result).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge and dogAge both being 24', () => {
    const result = getHumanAge(24, 24);
    expect(result).toEqual([2, 2]);
  });

  test('should return [2, 2] for catAge and dogAge both being between 24 and 27', () => {
    const result = getHumanAge(27, 27);
    expect(result).toEqual([2, 2]);
  });

  test('should return [3, 2] for catAge being 28 and dogAge being 28', () => {
    const result = getHumanAge(28, 28);
    expect(result).toEqual([3, 2]);
  });

  test('should return [21, 17] for catAge being 100 and dogAge being 100', () => {
    const result = getHumanAge(100, 100);
    expect(result).toEqual([21, 17]);
  });
});
