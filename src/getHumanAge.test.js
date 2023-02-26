'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array [0, 0] if cat age 14 and dog age 14', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return an array [0, 0] if cat age 14 and dog age 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return an array [1, 1] if cat age 15 and dog age 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return an array [1, 1] if cat age 23 and dog age 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return an array [2, 2] if cat age 24 and dog age 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return an array [2, 2] if cat age 27 and dog age 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return an array [3, 2] if cat age 28 and dog age 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return an array [3, 3] if cat age 28 and dog age 29', () => {
    expect(getHumanAge(27, 29))
      .toEqual([2, 3]);
  });

  test('should return an array [3, 3] if cat age 28 and dog age 29', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
