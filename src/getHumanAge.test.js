'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an expected humanAge when cat&dog are 0yo both', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return an expected humanAge when cat&dog are 15yo both', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return an expected humanAge when cat&dog are 23yo both', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return an expected humanAge when cat&dog are 24yo both', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return an expected humanAge when cat&dog are 28yo both', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return a whole number of years (discard the remainder)', () => {
    expect(getHumanAge(98, 98))
      .toEqual([20, 16]);
  });
});
