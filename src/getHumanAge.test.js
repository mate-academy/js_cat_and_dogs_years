'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if catAge = 0 and dogAge = 0', () => {
    const actual = getHumanAge(0, 0);

    expect(actual).toEqual([0, 0]);
  });

  test('should return [0, 0] if catAge < 15 and dogAge < 15', () => {
    const actual = getHumanAge(11, 14);

    expect(actual).toEqual([0, 0]);
  });

  test('should work only with positive numbers', () => {
    const actual = getHumanAge(-2, -12);

    expect(actual).toEqual([0, 0]);
  });

  test('should return NaN if input is not a number', () => {
    const actual = getHumanAge('qwe', 15);

    expect(actual).toEqual([NaN, 1]);
  });

  test('should return NaN if input is not passed', () => {
    const actual = getHumanAge(15);

    expect(actual).toEqual([1, NaN]);
  });

  test('should return [1, 2] if catAge = 15 and dogAge = 25', () => {
    const actual = getHumanAge(15, 25);

    expect(actual).toEqual([1, 2]);
  });

  test('should return [3, 2] if catAge = 28 and dogAge = 28', () => {
    const actual = getHumanAge(28, 28);

    expect(actual).toEqual([3, 2]);
  });

  test('should return [21, 17] if catAge = 100 and dogAge = 100', () => {
    const actual = getHumanAge(100, 100);

    expect(actual).toEqual([21, 17]);
  });

  test('should round the number down if the number is not an integer', () => {
    const actual = getHumanAge(15.15, 0);

    expect(actual).toEqual([1, 0]);
  });
});
