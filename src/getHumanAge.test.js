'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(1, 1)).toBeInstanceOf(Array);
  });

  test('should return [0, 0] for catAge = 0, dogAge = 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge = 15, dogAge = 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge = 24, dogAge = 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 3] for catAge = 28, dogAge = 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
