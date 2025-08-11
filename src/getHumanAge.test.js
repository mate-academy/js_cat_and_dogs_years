'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should return [0, 0] less than the first year threshold', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(10, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] just reaching the first threshold', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should handle ages between first and second thresholds', () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should calculate correctly when reaching the second threshold', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should calculate correctly for extra increments', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(36, 34)).toEqual([5, 4]);
  });

  test('should calculate correctly for very high values', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
    expect(getHumanAge(150, 200)).toEqual([33, 37]);
  });

  test('should handle cases where big difference', () => {
    expect(getHumanAge(10, 40)).toEqual([0, 5]);
    expect(getHumanAge(40, 10)).toEqual([6, 0]);
  });

  test('should return correct results for minimal edge cases', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });
});
