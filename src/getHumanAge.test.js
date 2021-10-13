'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof getHumanAge(15, 24)).toEqual('object');
  });

  it(`should return an array [1, 1] if catAge = 15 and dogAge = 15 `, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return an array [0, 0] if catAge = 14 and dogAge = 14 `, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return an array [2, 2] if catAge = 24 and dogAge = 24 `, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return an array [3, 3] if catAge = 28 and dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return an array [2, 2] if catAge = 27 and dogAge = 28`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });
});
