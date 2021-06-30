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

  it(`should return an array [3, 6] with catAge = 28 and dogAge = 44`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
