'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge([1, 1])).toBeInstanceOf(Array);
  });

  it(`input: catAge = 9, dogAge = 8`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });
});
