'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return element= 0 for catAge < 0`, () => {
    expect(getHumanAge(-1, 24)).toEqual([0, 2]);
  });

  it(`should return element=0 for dogAge < 0`, () => {
    expect(getHumanAge(15, -1)).toEqual([1, 0]);
  });

  it(`should return for catAge/dogAge if input witin (0..15) `, () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  it(`should return array for catAge, dogAge if input = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return 1, 1 for catAge/dogAge if input within [16..24) `, () => {
    expect(getHumanAge(19, 19)).toEqual([1, 1]);
  });

  it(`should return 2,2 for catAge/dogAge if input =24 `, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return 6, 5 for catAge/dogAge if input > 24 `, () => {
    expect(getHumanAge(41, 41)).toEqual([6, 5]);
  });
});
