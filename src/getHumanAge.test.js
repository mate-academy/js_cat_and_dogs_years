'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return an array [0, 0] with catAge = 9 and dogAge = 8`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return an array [1, 1] with catAge = 15 and dogAge = 20`, () => {
    expect(getHumanAge(15, 20)).toEqual([1, 1]);
  });

  it(`should return an array [0, 0] with catAge = 10 and dogAge = 7`, () => {
    expect(getHumanAge(10, 7)).toEqual([0, 0]);
  });

  it(`should return an array [1, 2] with catAge = 15 and dogAge = 24`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return an array [28, 44] with catAge = 3 and dogAge = 6`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
