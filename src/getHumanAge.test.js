'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be an array of 2 items', () => {
    expect(getHumanAge(20, 30)).toHaveLength(2);
    expect(Array.isArray(getHumanAge(20, 30))).toBe(true);
  });

  test('should return correct result for 0, 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return correct result for 15, 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return correct result for 24, 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return correct result for 28, 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return correct result for 100, 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
