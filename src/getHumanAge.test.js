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
    expect(getHumanAge([])).toEqual([0, NaN]);
  });

  it(`should return [0,] when input is [0,0]`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return an array [1, 2] if getHumanAge(15, 24)`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });
});
