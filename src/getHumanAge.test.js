'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(5, 1)).toBeInstanceOf(Array);
  });

  it(`should return empty array when input is empty array`, () => {
    expect(getHumanAge()).toEqual([NaN, NaN]);
  });

  it(`should return [0, 0] when input is [0,0]`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return an array [1, 2] if getHumanAge(15, 24)`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return an array [0, 6] if getHumanAge(0, 44)`, () => {
    expect(getHumanAge(0, 44)).toEqual([0, 6]);
  });

  it(`should return an array [0, 0] if getHumanAge(9, 8)`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return an array [3, 0] if getHumanAge(28, 0)`, () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
  });
});
