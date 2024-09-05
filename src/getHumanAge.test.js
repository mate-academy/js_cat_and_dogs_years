'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(Array.isArray(getHumanAge(0, 0))).toBe(true);
  });

  test('should return an array of length 2', () => {
    expect(getHumanAge(0, 0)).toHaveLength(2);
  });

  test('should return correct human ages for cats and dogs', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle edge cases correctly', () => {
    expect(getHumanAge(0, 5)).toEqual([0, 0]); // Cat is 0 years, dog less than 15
    expect(getHumanAge(5, 0)).toEqual([0, 0]); // Dog is 0 years, cat less than 15
    expect(getHumanAge(30, 30)).toEqual([3, 3]); // Both have exceeded the first two thresholds
  });
});
