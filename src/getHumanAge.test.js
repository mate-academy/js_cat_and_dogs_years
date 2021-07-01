'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(1)).toBeInstanceOf(Array);
  });

  it(`should return 0, 0 for catAge = 0 dogAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return 0, 0 for catAge = 14 dogAge = 14`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return 1, 1 for catAge = 15 dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return 1, 1 for catAge = 23 dogAge = 23`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it(`should return 2, 2 for catAge = 24 dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return 3, 3 for catAge = 28 dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return 4, 4 for catAge = 32 dogAge = 34`, () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });
});
