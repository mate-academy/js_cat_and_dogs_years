'use strict';

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for age < 15', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for first 15 years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for next 9 years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should handle different human ages for cat and dog', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should correctly convert older ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle mixed age inputs', () => {
    expect(getHumanAge(13, 15)).toEqual([0, 1]);
    expect(getHumanAge(24, 15)).toEqual([2, 1]);
    expect(getHumanAge(28, 23)).toEqual([3, 1]);
  });
});
