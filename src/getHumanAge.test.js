'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`array length should be 2`, () => {
    expect(getHumanAge(15, 15))
      .toHaveLength(2);
  });

  test(`should return an array`, () => {
    expect(getHumanAge([15, 15]))
      .toBeInstanceOf(Array);
  });

  test(`should return NaN if value is not a number`, () => {
    expect(getHumanAge('str', 15))
      .toEqual([NaN, 1]);
  });

  test(`Float numbers should round to floor`, () => {
    expect(getHumanAge(14.9, 24.2))
      .toEqual([0, 2]);
  });

  test(`should return [0, 0] if values (14, 14)`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return [21, 17] if values (100, 100)`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test(`should return [3, 2] if values (28, 28)`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return [0, 0] if values (0, 0)`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return 0, if number is negative`, () => {
    expect(getHumanAge(-30, 15))
      .toEqual([0, 1]);
  });

  test(`should return NaN, if one value is empty`, () => {
    expect(getHumanAge(15))
      .toEqual([1, NaN]);
  });

  test(`should return NaN, if one value is empty`, () => {
    expect(getHumanAge(15, 15, 15))
      .toEqual([1, 1]);
  });
});
