'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for catAge=0 and dogAge=0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge=15 and dogAge=15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should handle edge cases where age is under the first threshold', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should calculate correctly for large values like 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return [0, 0] for negative inputs', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

})
