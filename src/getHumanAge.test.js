'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(typeof getHumanAge(12, 12))
      .toBe('object');
  });

  test('should return [0, 0] for [0, 0]', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] for [3, 8]', () => {
    expect(getHumanAge(3, 8))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for [15, 22]', () => {
    expect(getHumanAge(15, 22))
      .toEqual([1, 1]);
  });

  test('should return [1, 2] for [23, 27]', () => {
    expect(getHumanAge(23, 27))
      .toEqual([1, 2]);
  });

  test('should return [3, 2] for [28, 28]', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [0, 1] for [0, 17]', () => {
    expect(getHumanAge(0, 17))
      .toEqual([0, 1]);
  });

  test('should return [] for [-1, -24]', () => {
    expect(getHumanAge(-1, -24))
      .toEqual([0, 0]);
  });
});
