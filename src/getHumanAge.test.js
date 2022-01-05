'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 when cat and dog < 15 y.o', () => {
    expect(getHumanAge(7, 7))
      .toEqual([0, 0]);
  });

  test('should return 0 when empty arrey', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 1 when cat and dog 15 y.o', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 when cat and dog > 14 and < 24 y.o', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 when cat and dog 24 y.o', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 when cat and dog > 23 and cat < 28 y.o', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3 for cat and 2 for dog when they are 28 y.o', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 21 for cat and 17 for dog when they are 100 y.o', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
