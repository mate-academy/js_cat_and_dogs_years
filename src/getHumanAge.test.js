'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for catAge 0 and dogAge 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for catAge 14 and dogAge 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge 15 and dogAge 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for catAge 23 and dogAge 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge 24 and dogAge 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for catAge 27 and dogAge 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for catAge 28 and dogAge 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for catAge 100 and dogAge 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle case where only cat reaches first human year', () => {
    expect(getHumanAge(15, 14)).toEqual([1, 0]);
  });

  test('should handle case where only dog reaches first human year', () => {
    expect(getHumanAge(14, 15)).toEqual([0, 1]);
  });

  test('should handle case where only cat reaches second human year', () => {
    expect(getHumanAge(24, 23)).toEqual([2, 1]);
  });

  test('should handle case where only dog reaches second human year', () => {
    expect(getHumanAge(23, 24)).toEqual([1, 2]);
  });

  // eslint-disable-next-line max-len
  test('should correctly calculate human age for cat and dog with different remaining years', () => {
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
  });

  // eslint-disable-next-line max-len
  test('should correctly calculate human age when remaining years are exact multiples of other factor', () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });
});
