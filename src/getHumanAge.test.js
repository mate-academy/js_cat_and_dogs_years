'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero if the value is 0 or less than 15', () => {
    expect(getHumanAge(0, 14))
      .toEqual([0, 0]);
  });

  test('should return different results for different values', () => {
    expect(getHumanAge(14, 15))
      .toEqual([0, 1]);
  });

  test('should return correct results for values 15 and 16', () => {
    expect(getHumanAge(15, 16))
      .toEqual([1, 1]);
  });

  test('should return correct results for values 23 and 24', () => {
    expect(getHumanAge(23, 24))
      .toEqual([1, 2]);
  });

  test('should return correct results for values 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return different results if both values are 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return correct results, if catAge > 27, dogAge > 28', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
