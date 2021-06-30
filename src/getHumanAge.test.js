'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return an array with integer values`, () => {
    for (const number of getHumanAge(9, 8)) {
      expect(Number.isInteger(number)).toBe(true);
    }
  });

  it(`should return '0' if 'catAge' or 'dogAge value < 15'`, () => {
    expect(getHumanAge(9, 14)).toEqual([0, 0]);
  });

  it(`should return '1' if 'catAge' or 'dogAge value < 24'`, () => {
    expect(getHumanAge(20, 23)).toEqual([1, 1]);
  });

  it(`should return '2' if 'catAge' or 'dogAge' value = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return '3' if 'catAge' value = 28 `, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });

  it(`should return '3' if 'dogAge' value = 29 `, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return '3' if 'catAge' value = 30, years is rounded down.`, () => {
    expect(getHumanAge(30, 24)).toEqual([3, 2]);
  });

  it(`should return '4' if 'dogAge' value = 36, years is rounded down.`, () => {
    expect(getHumanAge(30, 36)).toEqual([3, 4]);
  });
});
