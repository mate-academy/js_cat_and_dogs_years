'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return [1, 1] if dogAge = 15, catAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [0, 0] if catAge = 3 and dogAge = 4`, () => {
    expect(getHumanAge(3, 4)).toEqual([0, 0]);
  });

  it(`should return [2, 2] if dogAge = 24, catAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [3, 3] if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [0, 0] if catAge = 9, dogAge = 9`, () => {
    expect(getHumanAge(9, 9)).toEqual([0, 0]);
  });
});
