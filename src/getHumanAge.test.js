'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct human age for given cat and dog ages', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(28, 30)).toEqual([3, 3]);
    expect(getHumanAge(32, 35)).toEqual([4, 4]);
    expect(getHumanAge(36, 40)).toEqual([5, 5]);
  });

  test('should handle edge cases', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 14)).toEqual([1, 0]);
    expect(getHumanAge(14, 15)).toEqual([0, 1]);
  });
});
