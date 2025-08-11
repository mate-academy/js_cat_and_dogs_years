'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for cat and dog when input values [0, 0]',
    () => {
      expect(getHumanAge(0, 0))
        .toStrictEqual([0, 0]);
    });

  test('should return [1, 1] for cat and dog when input values [15, 15]',
    () => {
      expect(getHumanAge(15, 15))
        .toStrictEqual([1, 1]);
    });

  test('should return [0, 0] for cat and dog when input values [14, 14]',
    () => {
      expect(getHumanAge(14, 14))
        .toStrictEqual([0, 0]);
    });

  test('should return 3 for cat and 2 for dog when input values [28, 28]',
    () => {
      expect(getHumanAge(28, 28))
        .toStrictEqual([3, 2]);
    });

  test('should return [3, 3] for cat and dog when input values [29, 29]',
    () => {
      expect(getHumanAge(29, 29))
        .toStrictEqual([3, 3]);
    });

  test('should return 246 for cat and 197 for dog when input values 1000',
    () => {
      expect(getHumanAge(1000, 1000))
        .toStrictEqual([246, 197]);
    });
});
