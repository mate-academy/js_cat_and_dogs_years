'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(3, 4)).toBeInstanceOf(Array);
  });

  it(`should return [0, 0] array if catAge < 15 and dogAge < 15`, () => {
    expect(getHumanAge(3, 4)).toEqual([0, 0]);
  });

  it(`should return [1, 1] if catAge = 15 and dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [1, 1] if catAge > 15, catAge < 23, dogAge > 15 and dogAge < 23`,
    () => {
      expect(getHumanAge(17, 19)).toEqual([1, 1]);
    });

  it(`should return [1, 1] if catAge = 23 and dogAge = 23`,
    () => {
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

  it(`should return [2, 2] if catAge = 24 and dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [2, 2] if catAge > 24, catAge < 27, dogAge > 24 and dogAge < 28`,
    () => {
      expect(getHumanAge(26, 27)).toEqual([2, 2]);
    });

  it(`should return [3, 3] if catAge = 28 and dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [8, 7] if catAge = 50 and dogAge = 50`, () => {
    expect(getHumanAge(50, 50)).toEqual([8, 7]);
  });

  it(`should return 'NaN' if "age" argument is not a number`, () => {
    expect(getHumanAge(NaN, 'string')).toEqual([NaN, NaN]);
  });

  it(`should return '0' if "age" argument is null`, () => {
    expect(getHumanAge(null, 0)).toEqual([0, 0]);
  });

  it(`should ignore fractional part of "age" arguments`, () => {
    expect(getHumanAge(14.7, 23.7)).toEqual([0, 1]);
  });
});
