'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  // unexpected values

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('When both are 0, array [0, 0] should be returned', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('When no values are provided, array with NaN should be returned', () => {
    expect(getHumanAge()).toEqual([NaN, NaN]);
  });

  test(`When non-numeric values are passed,
  array with NaN should be returned`, () => {
    expect(getHumanAge('text', 'another text')).toEqual([NaN, NaN]);
  });

  // less than 0

  test('When both are less than 0, array [0, 0] should be returned', () => {
    expect(getHumanAge(-4, -4)).toEqual([0, 0]);
  });

  // at the lower border of 0

  test('When both are -1, array [0, 0] should be returned', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

  // at the upper border of 0

  test('When both are 1, array [0, 0] should be returned', () => {
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
  });

  // less than 15 more than 0

  test('When both are less than 15, array [0, 0] should be returned', () => {
    expect(getHumanAge(7, 7)).toEqual([0, 0]);
  });

  // at the lower border of 15

  test('When both are 14, array [0, 0] should be returned', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  // at the 15 border

  test('When both are 15, array [1, 1] should be returned', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  // at the upper border of 15

  test('When both are 16, array [1, 1] should be returned', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  // more than 15 less than 24

  test(`When both are more than 15 and less than 24,
    array [1, 1] should be returned`, () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  // at the lower border of 24

  test('When both are 23, array [1, 1] should be returned', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  // at the 24 border

  test('When both are 24, array [2, 2] should be returned', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  // at the upper border of 24

  test('When both are 25, array [2, 2] should be returned', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  // more than 24 less than 28 for cat
  // more than 24 less than 29 for dog

  test(`When catAge is more than 24 and less than 28,
  and dogAge is more than 24 and less than 29
    array [2, 2] should be returned`, () => {
    expect(getHumanAge(26, 26)).toEqual([2, 2]);
  });

  // at the lower border of 28 for catAge
  // at the lower border of 29 for dogAge

  test(`When dogAge is 28 and catAge is 27,
  array [2, 2] should be returned`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  // at the 28 border for catAge
  // at the 29 border for dogAge

  test(`When dogAge is 29 and catAge is 28,
  array [3, 3] should be returned`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  // at the upper of 28 border for catAge
  // at the upper of 29 border for dog

  test(`When dogAge is more than 29 and catAge is more than 28,
  array [3, 3] should be returned`, () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
  });

  // when ages is 100

  test(`When dogAge is 100 and catAge is 100,
  array [3, 3] should be returned`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
