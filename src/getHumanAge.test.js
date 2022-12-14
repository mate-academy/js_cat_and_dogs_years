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

  test('should return NaN if catAge or dogAge is not a number', () => {
    expect(getHumanAge(15, 'hello'))
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
});
