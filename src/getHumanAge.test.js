'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('function should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  test('should return 0 for cat and dog if age is 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 for cat and dog if age is less than 15', () => {
    expect(getHumanAge(7, 8))
      .toEqual([0, 0]);
  });

  test('should return 0 for cat and dog if age is 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 for cat and dog if age is 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 for cat and dog if age is >= 15 and <= 24', () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test('should return 1 for cat and dog if age is 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 for cat if age is >= 24 and < 28', () => {
    expect(getHumanAge(24, 1))
      .toEqual([2, 0]);
  });

  test('should return 2 for cat and dog if age is 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 for cat and dog if age is 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3 for cat and 2 for dog if age is 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 3 for cat and dog if age is 29', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test('should return 3 for cat and dog if age is > 29', () => {
    expect(getHumanAge(31, 32))
      .toEqual([3, 3]);
  });

  test('should return 2 for dog if age is >= 24 and < 29', () => {
    expect(getHumanAge(1, 24))
      .toEqual([0, 2]);
  });

  test(`should return [NaN, NaN] if type of variables equal 'string'`, () => {
    expect(getHumanAge('one', 'two'))
      .toEqual([NaN, NaN]);
  });
});
