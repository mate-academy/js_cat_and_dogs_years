'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(1))
      .toBeInstanceOf(Array);
  });

  test('should return an array with two elements', () => {
    expect(getHumanAge(1))
      .toHaveLength(2);
  });

  test('should return correct numbers', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
});
