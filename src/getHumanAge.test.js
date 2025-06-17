'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] when both input values are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 1] when cat age is 0 and dog age is 15', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('should return [1, 0] when cat age is 17 and dog age is 0', () => {
    expect(getHumanAge(17, 0)).toEqual([1, 0]);
  });

  test('should return [3, 2] for cat and dog age of 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [2, 2] at 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [21, 17] at 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
