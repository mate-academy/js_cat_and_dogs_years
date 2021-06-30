'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return 0, 0 for catAge = 0, dogAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return 0, 0 for catAge = 9, dogAge = 8`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return 1, 0 if catAge = 15, dogAge = 10`, () => {
    expect(getHumanAge(15, 10)).toEqual([1, 0]);
  });

  it(`should return 1, 2 if catAge = 15, dogAge = 24`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return 3, 3 if catAge = 29, dogAge = 30`, () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
  });
});
