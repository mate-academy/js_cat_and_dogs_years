'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for ages less than the first threshold', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return1for ages between the first and second thresholds', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should handle different combinations of ages', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return 0 for negative ages', () => {
    expect(getHumanAge(-5, -3)).toEqual([0, 0]);
  });

  test('should handle large ages', () => {
    expect(getHumanAge(1000, 1000)).toEqual([248, 200]);
  });

  test('should handle fractional ages', () => {
    expect(getHumanAge(15.5, 15.5)).toEqual([1, 1]);
    expect(getHumanAge(23.9, 23.9)).toEqual([1, 1]);
  });
});
