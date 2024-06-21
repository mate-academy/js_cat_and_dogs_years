'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [1, 1] for [15, 15]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return correct human age for various cat and dog ages', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle edge cases correctly', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });
});
