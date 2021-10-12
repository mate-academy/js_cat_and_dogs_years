'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(9, 8)).toEqual([0, 0]);
  });

  it(`should return an array of 0 if input is 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return an array even if more inputs then needed`, () => {
    expect(getHumanAge(9, 8, 0)).toEqual([0, 0]);
  });

  it(`should return [3, 6] if input (28, 44)`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
