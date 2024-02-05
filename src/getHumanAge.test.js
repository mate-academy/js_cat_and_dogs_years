'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be no conversion for zero years old', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be no conversion for fourteen years old', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be single year for fifteen years old', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be single year for fifteen years old', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be single year for fifteen years old', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should be two years for twenty four years old', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be two years for twenty seven years old', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should be two-three years for twenty eight years old', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be complex conversiong for one hundred years old', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
