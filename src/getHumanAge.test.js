'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [3, 3] for ages 30, 30', () => {
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return [0, 0] for ages 0, 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should handle large ages correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return [1, 1] at first threshold', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [2, 2] at second threshold', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should handle different cat and dog ages', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
