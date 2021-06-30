'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  // using boundary values technique
  it(`should return [0, 0] if catAge = 0, dogAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return [0, 0] if catAge = 10, dogAge = 10`, () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  it(`should return [1, 1] if catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [1, 1] if catAge = 16, dogAge = 16`, () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  it(`should return [2, 2] if catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [2, 2] if catAge = 25, dogAge = 25`, () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  it(`should return [3, 3] if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [21, 17] if catAge = 100, dogAge = 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
