'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return 0 if catAge and dogAge = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 if catAge = 8 and dogAge = 5', () => {
    expect(getHumanAge(8, 5))
      .toEqual([0, 0]);
  });

  test('should return 1 if catAge and dogAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 if catAge = 22 and dogAge = 23', () => {
    expect(getHumanAge(22, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 if catAge and dogAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 3 if catAge = 28 and dogAge = 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return the listed years if catAge and dogAge = 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should return 2 elemants of array', () => {
    expect(getHumanAge(1, 1))
      .toEqual([0, 0]);
  });
});
