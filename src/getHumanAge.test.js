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

  it(`should return elements=0 for catAge, dogAge if input = 30 `, () => {
    expect(getHumanAge(30, 30)).toEqual([0, 0]);
  });

  it(`should return array for catAge, dogAge if input below 30`, () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  it(`should return elements=0 for catAge, dogAge if input > 30 `, () => {
    expect(getHumanAge(31, 31)).toEqual([0, 0]);
  });
});
