'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 human year
    when cat or dog age less than 15`, () => {
    expect(getHumanAge(5, 8)).toEqual([0, 0]);
  });

  test(`should return 1 human year
    when cat or dog age is 15(boundary value)`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 1 human year
    when cat and dog age is 21`, () => {
    expect(getHumanAge(21, 21)).toEqual([1, 1]);
  });

  test(`should return 1 more human year for
    the next 9 dog or cat years(boundary value)`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 1 more human year for
    the next 9 dog or cat years`, () => {
    expect(getHumanAge(26, 26)).toEqual([2, 2]);
  });

  test(`should return 1 extra human year for
    every 4 next cat years(boundary value)`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return 1 extra human year for
    every 4 next cat years`, () => {
    expect(getHumanAge(45, 28)).toEqual([7, 2]);
  });

  test(`should return 1 extra human year for
    every 5 next dog years(boundary value)`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should return 1 extra human year for
    every 5 next dog years`, () => {
    expect(getHumanAge(47, 100)).toEqual([7, 17]);
  });
});
