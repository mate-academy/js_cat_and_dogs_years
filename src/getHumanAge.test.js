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

  it(`should return 1, 1 if catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return 2, 2 if catAge = 25, dogAge = 25`, () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  it(`should return 3, 3 if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
