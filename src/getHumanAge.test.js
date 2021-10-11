'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(9, 8)).toBeInstanceOf(Array);
  });

  it(`should return an array [0, 0] if input(9, 8)`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return an array [1, 2] if input(15, 24)`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return an array [3, 6] if input(28, 44)`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
