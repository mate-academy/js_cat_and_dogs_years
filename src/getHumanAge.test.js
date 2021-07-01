'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return [0,0] array if catAge < 15 and dogAge < 15`, () => {
    expect(getHumanAge(5, 14)).toEqual([0, 0]);
  });

  it(`should return [1,1] if catAge >=15, <=23 and dogAge >=15, <= 23`, () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  it(`should return [2,2] if catAge >= 24, <=27 and dogAge >= 24, <=27`, () => {
    expect(getHumanAge(24, 27)).toEqual([2, 2]);
  });

  it(`should return [3,3] if catAge = 28 and dogAge =29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
