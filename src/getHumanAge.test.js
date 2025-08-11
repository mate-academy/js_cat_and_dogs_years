/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros if catAge or dogAge = 0', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test('should return zeros if catAge or dogAge = 10', () => {
    expect(getHumanAge(10, 10))
      .toStrictEqual([0, 0]);
  });

  test('should return 1 if catAge or dogAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test('should return 1 if catAge or dogAge = 20', () => {
    expect(getHumanAge(20, 20))
      .toStrictEqual([1, 1]);
  });

  test('should return 2 if catAge or dogAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test('should return 2 if catAge or dogAge = 25', () => {
    expect(getHumanAge(25, 25))
      .toStrictEqual([2, 2]);
  });

  test('should return 3 if catAge = 28', () => {
    expect(getHumanAge(28, 15))
      .toStrictEqual([3, 1]);
  });

  test('should return 3 if catAge or dogAge = 29', () => {
    expect(getHumanAge(29, 29))
      .toStrictEqual([3, 3]);
  });

  test('should return NaN if catAge or dogAge is not a number', () => {
    expect(getHumanAge(16, 'hello'))
      .toStrictEqual([1, NaN]);
  });

  test('should return zeros if catAge or dogAge is negative', () => {
    expect(getHumanAge(-15, -15))
      .toStrictEqual([0, 0]);
  });

  test('should return rounded result if the result is not integer', () => {
    expect(getHumanAge(31, 31))
      .toStrictEqual([3, 3]);
  });

  test('should return result if catAge or dogAge is not integer', () => {
    expect(getHumanAge(15.5, 15.5))
      .toStrictEqual([1, 1]);
  });

  test('should return NaN if catAge or dogAge is empty', () => {
    expect(getHumanAge())
      .toStrictEqual([NaN, NaN]);
  });
});
