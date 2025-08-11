'use strict';

describe('getHumanAge(catAge, dogAge)', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared as a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('getHumanAge(0, 0) should return [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('ages < 15 cat/dog years should map to [0, 0]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('ages === 15 cat/dog years should map to [1, 1]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('cat/dog age 16–23 → [1, 1]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('ages 24–27 cat/dog years should map to [2, 2]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('getHumanAge(28, 28) should return [3, 2]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('getHumanAge(100, 100) should return [21, 17]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
