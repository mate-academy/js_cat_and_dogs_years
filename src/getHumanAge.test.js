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

  test('should return 2 if age of cat and dog is 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3 for cat and 2 for dog if age is 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
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
