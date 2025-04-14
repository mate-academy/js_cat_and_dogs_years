'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0, 0 if catAge and dogAge < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1, 1 if catAge and dogAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1, 1 if catAge and dogAge = 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2, 2 if catAge and dogAge = 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3 and 2 if catAge and dogAge = 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 21, 17 if catAge and dogAge = 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
