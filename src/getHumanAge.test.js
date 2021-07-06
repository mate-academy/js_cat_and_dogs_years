'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return 0 for 'catToHuman' if 'catAge' < 15`, () => {
    expect(getHumanAge(8, 60)).toEqual([0, 9]);
  });

  it(`should return 0 for 'dogToHuman' if 'dogAge' < 15`, () => {
    expect(getHumanAge(60, 5)).toEqual([11, 0]);
  });

  it(`should return 1 for 'catToHuman' if 'catAge' = 15`, () => {
    expect(getHumanAge(15, 60)).toEqual([1, 9]);
  });

  it(`should return 1 for 'dogToHuman' if 'dogAge' = 15`, () => {
    expect(getHumanAge(60, 15)).toEqual([11, 1]);
  });

  it(`should return [7, 9] if 'catAge' = 44, 'dogAge' = 63`, () => {
    expect(getHumanAge(44, 63)).toEqual([7, 9]);
  });

  it(`should return [7, 9] if 'catAge' = 45, 'dogAge' = 64`, () => {
    expect(getHumanAge(45, 64)).toEqual([7, 10]);
  });

  it(`should return [NuN, NuN] if 'catAge', 'dogAge' is not a number`, () => {
    expect(getHumanAge('acv', 'asd')).toEqual([NaN, NaN]);
  });
});
