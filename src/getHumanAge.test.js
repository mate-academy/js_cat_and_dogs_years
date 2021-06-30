'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`input values should be of type 'number'`, () => {
    expect(getHumanAge()).not.toBeNaN();
  });

  it(`should return [0,0] if dogAge < 15 and catAge < 15`, () => {
    expect(getHumanAge(12, 14)).toEqual([0, 0]);
  });

  it(`should return [1,1] if dogAge>15,dogAge<23 and catAge>15,catAge<23`,
    () => {
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
    });

  it(`should return [2,2] if dogAge = 24 and catAge = 24 `, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [2,2] if dogAge>24,dogAge<28 and catAge>24,catAge<27`,
    () => {
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
    });

  it(`should return [3,3] if dogAge = 29 and catAge = 28`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [10,10] if dogAge = 68 and catAge = 56`, () => {
    expect(getHumanAge(56, 64)).toEqual([10, 10]);
  });
});
