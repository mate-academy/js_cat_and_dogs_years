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

  test('if numbers 0 and 0 should return an array with 0 and 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('if numbers 14 and 14 should return an array with 0 and 0', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('if numbers 15 and 15 should return an array with 1 and 1', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('if numbers 23 and 23 should return an array with 1 and 1', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('if numbers 24 and 24 should return an array with 2 and 2', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('if numbers 27 and 27 should return an array with 2 and 2', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('if numbers 28 and 28 should return an array with 3 and 2', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('if numbers 100 and 100 should return an array with 27 and 17', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
