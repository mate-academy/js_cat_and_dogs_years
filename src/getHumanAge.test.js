'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0, 0 if catAge < 15 and dogAge < 15', () => {
    expect(getHumanAge(5, 10))
      .toEqual([0, 0]);
  });

  test('should return 1, 1 if catAge = 15 and dogAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1, 1 if 15 <= catAge < 24 and 15 <= dogAge < 24', () => {
    expect(getHumanAge(18, 20))
      .toEqual([1, 1]);
  });

  test('should return 2, 2 if catAge = 24 and dogAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 3 and 2 if catAge = 28 and dogAge = 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 11, 9 if catAge = 60 and dogAge = 60', () => {
    expect(getHumanAge(60, 60))
      .toEqual([11, 9]);
  });
});
