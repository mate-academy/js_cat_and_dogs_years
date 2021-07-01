'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(10, 10)).toBeInstanceOf(Array);
  });

  it(`should return [0, 0] if catAge = 10, dogAge = 10`, () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  it(`should return [1, 0] if catAge = 15, dogAge = 14`, () => {
    expect(getHumanAge(15, 14)).toEqual([1, 0]);
  });

  it(`should return [2, 1] if catAge = 24, dogAge = 16`, () => {
    expect(getHumanAge(24, 16)).toEqual([2, 1]);
  });

  it(`should return [2, 2] if catAge = 27, dogAge = 25`, () => {
    expect(getHumanAge(27, 25)).toEqual([2, 2]);
  });

  it(`should return [3, 3] if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [4, 4] if catAge = 32, dogAge = 34`, () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  it(`should return [5, 5] if catAge = 37, dogAge = 39`, () => {
    expect(getHumanAge(37, 39)).toEqual([5, 5]);
  });

  it(`should return [21, 17] if catAge = 100, dogAge = 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
