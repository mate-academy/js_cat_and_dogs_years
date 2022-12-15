'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(1, 1)).toBeInstanceOf(Array);
  });

  test('should return 0 for negative numbers', () => {
    expect(getHumanAge(-1, -2)).toEqual([0, 0]);
  });

  test('Should return 0 for age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return NaN if type of variables equal `string`', () => {
    expect(getHumanAge('one', 'five')).toEqual([NaN, NaN]);
  });

  test('Should return 0 for cat and dog if age is less than 15', () => {
    expect(getHumanAge(3, 14)).toEqual([0, 0]);
  });

  test('Should return 1 for cat and dog if age is >= 15 and < 24', () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test('Should return 2 for cat and dog if age is >= 24 and < 28', () => {
    expect(getHumanAge(24, 27)).toEqual([2, 2]);
  });

  test('Should return 3 for cat and 2 for dog if age is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return 3 for cat and 3 for dog if age is 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('Should return 21 for cat and 17 for dog if age is 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
