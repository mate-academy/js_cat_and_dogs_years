'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for age 0 for both cat and dog', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] for age 14 for both cat and dog', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for age 15 for both cat and dog', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] for age 23 for both cat and dog', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] for age 24 for both cat and dog', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] for age 27 for both cat and dog', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return [3, 2] for age 28 for cat and dog', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [21, 17] for age 100 for both cat and dog', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
