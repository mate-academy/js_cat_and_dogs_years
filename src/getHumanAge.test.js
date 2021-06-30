'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return an array [0, 0] if catAge < 15, dogAge < 15`, () => {
    expect(getHumanAge(13, 7)).toEqual([0, 0]);
  });

  it(`should return an array [1, 2] if catAge = 15, dogAge = 24`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return an array [3, 6] if catAge = 28, dogAge = 44`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });

  it(`should return an array [0, 0] if catAge = '', dogAge = ''`, () => {
    expect(getHumanAge('', '')).toEqual([0, 0]);
  });
});
