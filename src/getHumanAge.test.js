'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return [0, 0] if input catAge < 15 and dogAge < 15`, () => {
    expect(getHumanAge(5, 14)).toEqual([0, 0]);
  });

  it(`should return [1, 1] if input catAge 15-23 && dogAge 15-23`, () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  it(`should return [2, 2] if input catAge 24-27 && dogAge 24-27`, () => {
    expect(getHumanAge(24, 27)).toEqual([2, 2]);
  });

  it(`should return [3, 3] if input catAge = 28, and dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [5, 8] if input catAge = 36, and dogAge = 54`, () => {
    expect(getHumanAge(36, 54)).toEqual([5, 8]);
  });

  it(`should return [13, 5] if input catAge = 68, and dogAge = 39`, () => {
    expect(getHumanAge(68, 39)).toEqual([13, 5]);
  });

  it(`should return [NaN, 1] if input catAge is NaN and dogAge = 18`, () => {
    expect(getHumanAge(NaN, 18)).toEqual([NaN, 1]);
  });

  it(`should return [2, NaN] if input catAge = 25, dogAge is NaN`, () => {
    expect(getHumanAge(25, 'string')).toEqual([2, NaN]);
  });

  it(`should return [3, 1] and round fractional numbers`, () => {
    expect(getHumanAge(30.3, 17.843)).toEqual([3, 1]);
  });
});
