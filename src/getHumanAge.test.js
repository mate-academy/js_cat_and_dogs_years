'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`return human age [0, 0] if catAge = 8, dogAge = 7`, () => {
    expect(getHumanAge(8, 7)).toEqual([0, 0]);
  });

  it(`return human age [1, 1] if catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`return human age [2, 2] if catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`return human age [3, 3] if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`return human age [4, 4] if catAge = 32, dogAge = 34`, () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  it(`return human age [0, 0] if catAge = 14, dogAge = 14`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });
});
