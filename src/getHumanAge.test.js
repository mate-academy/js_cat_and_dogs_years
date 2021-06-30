'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return [1, 1] if catAge = 16, dogAge = 16`, () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  it(`should return [0, 0] if catAge = 9, dogAge = 3`, () => {
    expect(getHumanAge(9, 3)).toEqual([0, 0]);
  });

  it(`should return [4, 4] if catAge = 32, dogAge = 34`, () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  it(`should return [21, 17] if catAge = 100, dogAge = 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  it(`should return [3, 3] if catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
