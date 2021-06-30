'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return [1, 1] array if catAge = 15 and dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`input values should be of type 'number'`, () => {
    expect(getHumanAge()).not.toBeNaN();
  });

  it(`should return [1, 2] array if catAge = 15 and dogAge = 24`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return [4, 6] array if catAge = 32 and dogAge = 44`, () => {
    expect(getHumanAge(32, 44)).toEqual([4, 6]);
  });

  it(`should return [0, 0] array if catAge = 0 and dogAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return [3, 5] array if catAge = 28 and dogAge = 39`, () => {
    expect(getHumanAge(28, 39)).toEqual([3, 5]);
  });

  it(`should return [4, 2] array if catAge = 32 and dogAge = 24`, () => {
    expect(getHumanAge(32, 24)).toEqual([4, 2]);
  });
});
