'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge([])).toBeInstanceOf(Array);
  });

  it(`should return first cat & dog years for '1' human year`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return second cat & dog years for 24 human years`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should 0 cat & dog years for 14 human years`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return 3 cat years for 28 human years`, () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
  });

  it(`should return 3 cat years for 29 human years`, () => {
    expect(getHumanAge(0, 29)).toEqual([0, 3]);
  });

  it(`should return 4 cat years for 32 human years`, () => {
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });

  it(`should return 4 dog years for 32 human years`, () => {
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
  });

  it(`should return 6 cat years for 40 human years`, () => {
    expect(getHumanAge(40, 0)).toEqual([6, 0]);
  });

  it(`should return 6 dog years for 44 human years`, () => {
    expect(getHumanAge(0, 44)).toEqual([0, 6]);
  });
});
