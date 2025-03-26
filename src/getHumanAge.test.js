'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(1, 1))
      .toBeInstanceOf(Array);
  });

  test('should return an array with two elements', () => {
    expect(getHumanAge(1, 1))
      .toHaveLength(2);
  });

  test('should return an array with two elements with numbers', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return an array with two elements 28 and 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return an array with two elements 100 and 100', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });
});
