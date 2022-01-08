'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declare', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if inputs < 15', () => {
    expect(getHumanAge(8, 8))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] if inputs are (14, 14)', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] if inputs are (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] if inputs are (23, 23)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] if inputs are (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] if inputs are (27, 28)', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return [3, 3] if inputs are (28, 29)', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return [3, 3] if inputs are (31, 33)', () => {
    expect(getHumanAge(31, 33))
      .toEqual([3, 3]);
  });

  test('should return [4, 4] if inputs are (32, 34)', () => {
    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });

  test('should return [0, 0] if inputs are negative numbers', () => {
    expect(getHumanAge(-1, -3))
      .toEqual([0, 0]);
  });
});
