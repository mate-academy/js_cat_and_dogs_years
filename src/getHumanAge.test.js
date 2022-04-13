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

  test('should return an array with 2 elements', () => {
    expect(getHumanAge(1, 1))
      .toHaveLength(2);
  });

  test('should return an array with 2 elements', () => {
    expect(getHumanAge(1, 1))
      .toHaveLength(2);
  });

  test('should return 0 age for both', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 age for both', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 year for cat and 1 year for dog', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 year for cat and 1 year for dog', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 years for cat and 2 years for dog', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 years for cat and 2 years for dog', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3 years for cat and 2 years for dog', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 21 years for cat and 17 years for dog', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
