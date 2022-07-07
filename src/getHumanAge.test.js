'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be declared', () => {
    expect(getHumanAge(28, 28))
      .toBeInstanceOf(Array);
  });

  test('should return an Array of given length', () => {
    expect(getHumanAge(28, 28).length)
      .toBe(2);
  });

  test('should return NaN for non number inputs', () => {
    expect(getHumanAge('hg', '@$'))
      .toEqual([NaN, NaN]);
  });

  test('should return zeros for zeros inputs', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return zeros for negative inputs', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return zeros if animalAge < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] when input is [23, 23]', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] when input is [24, 24]', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [3, 2] when input is [28, 28]', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return [21, 17] when input is [100, 100]', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
