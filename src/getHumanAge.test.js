'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return an array with length 2`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return an array [0, 0] with catAge = 9 and dogAge = 8`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return an array [1, 2] with catAge = 16 and dogAge = 27`, () => {
    expect(getHumanAge(16, 27)).toEqual([1, 2]);
  });

  it(`should return an array [0, 6] with catAge = 0 and dogAge = 44`, () => {
    expect(getHumanAge(0, 44)).toEqual([0, 6]);
  });

  it(`should return an array [2, 2] with catAge = 24 and dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return an array [3, 3] with catAge = 29 and dogAge = 30`, () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
  });
});
