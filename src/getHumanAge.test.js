'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0, 0 hy for 0, 0 cat and dog years', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0, 0 hy for 14, 14 cat and dog years', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1, 1 hy for 15, 15 cat and dog years', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1, 1 hy for 23, 23 cat and dog years', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2, 2 hy for 24, 24 cat and dog years', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2, 2 hy for 27, 27 cat and dog years', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3, 2 hy for 28, 28 cat and dog years', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 21, 17 hy for 100, 100 cat and dog years', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
