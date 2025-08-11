'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return arr', () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });

  test('should check 0 years', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should check before first 14 years', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should check first 15 years', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should check 24 years', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should check 28 years', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`Should check years, when Cat and Dog age = 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
