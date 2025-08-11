'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  test('should return [0, 0] when catAge = 14, dogAge = 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] when catAge = 15, dogAge = 15 ', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 2] when catAge = 23, dogAge = 24', () => {
    expect(getHumanAge(23, 24)).toEqual([1, 2]);
  });

  test('should return [2, 2] when catAge = 24, dogAge = 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 3] when catAge = 28, dogAge = 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [21, 17] when catAge = 100, dogAge = 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
