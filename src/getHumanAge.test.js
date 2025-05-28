'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for ages less than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for ages between 15 and 23', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);

    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] for ages between 24 and 27', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);

    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return [3, 2] for ages between 28 and 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [100, 100] for ages between 21 and 17', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);

    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
