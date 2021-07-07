'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array [1, 1] if catAge < 15, dogAge < 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return array [1, 1] if catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return array [2, 2] if catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return array [1, 1] if catAge < 24, dogAge < 24`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it(`should return array [3, 3] if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return array [2, 2] if catAge < 28, dogAge < 29`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  it(`should return array [5, 6] if catAge = 36, dogAge = 44`, () => {
    expect(getHumanAge(36, 44)).toEqual([5, 6]);
  });
});
