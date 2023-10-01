'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(15, 15))
      .toBeInstanceOf(Array);
  });

  test('should return 0, 0 when catAge and dogAge = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0, 0 when catAge and dogAge less than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1, 1 when catAge and dogAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1, 1 when catAge and dogAge >= 15 and < 24', () => {
    expect(getHumanAge(22, 22))
      .toEqual([1, 1]);
  });

  test('should return 2, 2 when catAge and dogAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2, 2 when catAge and dogAge >=24 and < 28', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3, 2 when catAge and dogAge = 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 21, 17 when catAge and dogAge = 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
