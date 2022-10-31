'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return NaN if one of the parameters is not a number', () => {
    expect(getHumanAge('cat', 18)).toEqual([NaN, 1]);
  });

  test(`should return '0' if one of the parameters < 0`, () => {
    expect(getHumanAge(-12, 18)).toEqual([0, 1]);
  });

  test(`should return an array`, () => {
    expect(typeof getHumanAge(12, 18)).toBe('object');
  });

  test(`should return '0' if animal age < 15 && is floating`, () => {
    expect(getHumanAge(14.9, 18)).toEqual([0, 1]);
  });

  test(`should accept numbers with exponent of 10`, () => {
    expect(getHumanAge(55, 1e5)).toEqual([9, 19997]);
  });

  test(`should accept numbers of different numeral systems`, () => {
    expect(getHumanAge(55, 0o377)).toEqual([9, 48]);
  });

  test(`should return NaN if parameter is absent`, () => {
    expect(getHumanAge(55)).toEqual([9, NaN]);
  });

  test(`should return [3, 2] if input is 28, 28`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return [3, 3] if input is 28, 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
