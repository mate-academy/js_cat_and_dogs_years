'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(15, 15)).toBeInstanceOf(Array);
  });

  it(`should return [4] when inputs is 8, 2`, () => {
    expect(getHumanAge(24, 29)).toEqual([2, 3]);
  });

  it(`should return [0] when inputs is 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });
});
