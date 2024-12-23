'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for catAge = 0 and dogAge = 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge = 15 and dogAge = 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for catAge = 23 and dogAge = 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge = 24 and dogAge = 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for catAge = 27 and dogAge = 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should handle large numbers correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
