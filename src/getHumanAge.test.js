'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if cat and dog age is (0,0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] if cat and dog age is (1, 1)', () => {
    expect(getHumanAge(1, 1))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] if cat and dog age is (14, 14)', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] if cat and dog age is (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] if cat and dog age is (23, 23)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] if cat and dog age is (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] if cat and dog age is (27, 27)', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return [3, 2] if cat and dog age is (28, 28)', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [21, 17] if cat and dog age is (100, 100)', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
