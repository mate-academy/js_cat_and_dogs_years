'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return 0, 0 for catAge = 0 dogAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return 0, 0 if catAge = 14, dogAge = 14`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return 1, 1 if catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return 1, 1 if catAge = 23, dogAge = 23`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it(`should return 2, 2 if catAge = 24, gAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return 2, 2 if catAge = 27, dogAge = 28`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  it(`should return 3, 3 if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return 3, 6 if catAge = 28, dogAge = 44`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
