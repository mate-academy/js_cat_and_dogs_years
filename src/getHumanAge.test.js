'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeroes when both inputs are zeroes', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return NaN for missed input', () => {
    expect(getHumanAge(24))
      .toEqual([2, NaN]);
  });

  test('should return NaN for input which is not a number', () => {
    expect(getHumanAge(15, 'Hello'))
      .toEqual([1, NaN]);
  });

  test('should return zero when cat or dog age is less than 15', () => {
    expect(getHumanAge(6, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 if cat or dog age is: 15 <= age < 24', () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 if cat age is 27 and dog age is 28', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return 3 if cat age is 28 and dog age is 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return [21, 27] when input is 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should calculate age with float numbers', () => {
    expect(getHumanAge(30.5, 31.5))
      .toEqual([3, 3]);
  });
});
