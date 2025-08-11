'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 if number of animal years is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return 0 if number of animal years is less
    than 1 human year`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return 1 if number of animal years is equal
    to 1 human year`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 1 if number of animal years is less
    than 2 human years`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return 2 if number of animal years is equal
    to 2 human years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 2 if number of animal years is less
    than 3 human years`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should add 1 extra human year for every 4 cat years and
    every 5 dog years after 23 years`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
