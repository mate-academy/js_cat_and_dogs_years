'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return the correct human ages for cat and dog', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle edge cases gracefully', () => {
    expect(getHumanAge(-5, -5)).toEqual([0, 0]);
    expect(getHumanAge(1000, 1000)).toEqual([246, 197]);
  });

  test('should handle decimal values gracefully', () => {
    expect(getHumanAge(12.5, 12.5)).toEqual([0, 0]);
    expect(getHumanAge(15.9, 15.9)).toEqual([1, 1]);
  });
});
