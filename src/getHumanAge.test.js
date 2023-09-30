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
    expect(getHumanAge(2, 2))
      .toHaveLength(2);
  });

  test('should return zeros if age of cat and dog is zero', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return zeros if age of cat or dog < 15', () => {
    expect(getHumanAge(5, 11))
      .toEqual([0, 0]);
  });

  test('should return 1 if age of cat and dog = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 if age of cat and dog on range of 15 - 23', () => {
    expect(getHumanAge(18, 21))
      .toEqual([1, 1]);
  });

  test('should return 1 if age of cat and dog is 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 if age of cat and dog is 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 if cat is 27 and dog is 28', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return 3 if cat is 28 and dog is 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return 3 if cat is 31 and dog is 33', () => {
    expect(getHumanAge(31, 33))
      .toEqual([3, 3]);
  });

  test('should return 4 if cat is 32 and dog is 34', () => {
    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });

  test('should return 6 if cat is 40 and dog is 44', () => {
    expect(getHumanAge(40, 44))
      .toEqual([6, 6]);
  });

  test('should return 21 for cat and 17 for dog if age is 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should return 3 if the age of cat and dog is 31.5', () => {
    expect(getHumanAge(31.5, 31.5))
      .toEqual([3, 3]);
  });
});
