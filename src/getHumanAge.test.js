'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(0, 0))
      .toBeInstanceOf(Array);
  });
  /// should i write this tests? like float numbers, strings, empty array
  // since it said that it takes int numbers.

  test('should return [NaN, NaN], when input string', () => {
    expect(getHumanAge('cat', 'dog'))
      .toEqual([NaN, NaN]);
  });

  test('should return [0, 0], when input negative numbers', () => {
    expect(getHumanAge(-20, -15))
      .toEqual([0, 0]);
  });

  test('should work with fractional numbers', () => {
    expect(getHumanAge(15.5, 15.5))
      .toEqual([1, 1]);
  });

  test('should return human years, when dog age = 0 and cate age = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 human years, when cat age is lower than 15', () => {
    expect(getHumanAge(14, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 human years, when dog age is lower than 15', () => {
    expect(getHumanAge(0, 14))
      .toEqual([0, 0]);
  });

  test('should give 1 human year, when cat age => 15 and cat age < 24', () => {
    expect(getHumanAge(17, 0))
      .toEqual([1, 0]);
  });

  test('should give 1 human year, when dog age => 15 and dog age < 24', () => {
    expect(getHumanAge(0, 17))
      .toEqual([0, 1]);
  });

  test(`should give 1 human year, 
  when then cat age => 24 and cat age < 28`, () => {
    expect(getHumanAge(25, 0))
      .toEqual([2, 0]);
  });

  test('should give 1 human year, when dog age => 24 and dog age < 29', () => {
    expect(getHumanAge(0, 25))
      .toEqual([0, 2]);
  });

  test('should give 1 human year every 4 cat years, when cat age => 28', () => {
    expect(getHumanAge(28, 0))
      .toEqual([3, 0]);
  });

  test('should give 1 human year every 5 dog years, when dog age => 29', () => {
    expect(getHumanAge(0, 29))
      .toEqual([0, 3]);
  });

  test('should return [6, 0], when cat age = 40', () => {
    expect(getHumanAge(40, 0))
      .toEqual([6, 0]);
  });

  test('should return [0, 5], when dog age = 39', () => {
    expect(getHumanAge(0, 39))
      .toEqual([0, 5]);
  });
});
