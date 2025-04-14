'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 human year
    when cat or dog age is 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return 0 human year
    when cat or dog age less than 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return 1 human year
    when cat or dog age is 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 1 human year
    when cat or dog age is 23`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return 1 more human year for
    the next 9 dog years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 1 more human year for
    the next 9 cat years`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return 1 extra human year for
    every 4 next cat years`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return 1 extra human year for
    every 4 next dog years`, () => {
    expect(getHumanAge(27, 29)).toEqual([2, 3]);
  });

  test(`should return 1 extra human year for
    every 4 next cat or dog years`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
