'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array with two elements', () => {
    expect(getHumanAge(10, 4))
      .toHaveLength(2);
  });

  test('should return 0, 0 if cat years < 15 and dog years < 15', () => {
    expect(getHumanAge(0, 14))
      .toEqual([0, 0]);
  });

  test('should return 1, 1 if cat and dog years >= 15 and <= 23', () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 if cat years >= 24 and < 28', () => {
    expect(getHumanAge(24, 10))
      .toEqual([2, 0]);
  });

  test('should return 2 if dog years >= 24 and < 29', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return 3 if cat years >= 29 and < 32', () => {
    expect(getHumanAge(31, 24))
      .toEqual([3, 2]);
  });

  test('should return 3 if dog years >= 29 and < 33', () => {
    expect(getHumanAge(29, 32))
      .toEqual([3, 3]);
  });

  test('should return 21, 17 if cat years 100 and dog years 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
