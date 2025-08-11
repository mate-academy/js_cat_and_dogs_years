/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('if catAge & dogAge is zero, should return [0, 0] ', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('if catAge & dogAge is less than 15, should return [0, 0] ', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('if catAge & dogAge is 15, should return [1, 1] ', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('if catAge & dogAge is more than 15 but less than 24, should return [1, 1]',
    () => {
      const result = getHumanAge(23, 23);

      expect(result).toEqual([1, 1]);
    });

  test('if catAge & dogAge is 24, should return [2, 2]', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('if catAge & dogAge is 27, should return [2, 2]', () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test('if catAge & dogAge is 28, should return [3, 2]', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('if catAge & dogAge is 100, should return [21, 17]', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
