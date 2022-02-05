'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('shoud return [0, 0] for negative numbers', () => {
    expect(getHumanAge(-3, -5))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] for both 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] for both 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for both 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('shoud return [2, 2] for both 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] for both 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return an array with different numbers for both 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [11, 3] for (60, 32)', () => {
    expect(getHumanAge(60, 32))
      .toEqual([11, 3]);
  });
});
