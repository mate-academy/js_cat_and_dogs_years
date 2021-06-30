'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return an array [0, 0] if 'catAge' = 9, 'dogAge' = 8`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return an array [1, 1] if 'catAge' = 16, 'dogAge' = 16`, () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  it(`should return an array [3, 6] if 'catAge' = 28, 'dogAge' = 44`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
