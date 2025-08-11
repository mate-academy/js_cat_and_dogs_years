'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return both 0 for both 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return both 0 for both minus numbers', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

  test('should return both 0 for 14 both parameters', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for 15 both parameters', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1]  for 23 both parameters', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for 24 both parameters', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for catAge = 27, dogAge = 28', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should return [3, 3] for catAge = 28, dogAge = 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [3, 3] for catAge = 31, dogAge = 33', () => {
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
  });

  test('should return [4, 4] for catAge = 32, dogAge = 34', () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  test('should return [21, 17] for catAge = 100, dogAge = 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return [20, 18] for catAge = 99, dogAge = 104', () => {
    expect(getHumanAge(99, 104)).toEqual([20, 18]);
  });

  test('should work correct with thousands', () => {
    expect(getHumanAge(15555, 15555)).toEqual([3884, 3108]);
  });
});
