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

  test('should return [0, 0] for catAge 5 and dogAge 5', () => {
    expect(getHumanAge(5, 5)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge 15 and dogAge 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge 24 and dogAge 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 3] for catAge 28 and dogAge 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [4, 4] for catAge 32 and dogAge 34', () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });
});
