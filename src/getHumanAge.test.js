'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(28, 28)).toBeInstanceOf(Array);
  });

  test('should return [0, 0] for catAge and dogAge being 0 or less than 15',
    () => {
      expect(getHumanAge(14, 14)).toEqual([0, 0]);
    });

  test(
    'should return [1, 1] for catAge and dogAge being 15 or less than 24',
    () => {
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
    });

  test(
    'should return [2, 2] for catAge and dogAge being 24 and between 24 and 27',
    () => {
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
    });

  test('should return [3, 2] for catAge being 28 and dogAge being 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for catAge and dogAge being 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle mixed catAge and dogAge values correctly', () => {
    expect(getHumanAge(14, 15)).toEqual([0, 1]);
    expect(getHumanAge(24, 28)).toEqual([2, 2]);
  });
});
