'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  it(`should return an array with length of 2`, () => {
    expect(getHumanAge()).toHaveLength(2);
  });

  it(`should return [0, 0] if catAge = 0, dogAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return [0, 0] if catAge = 8, dogAge = 8`, () => {
    expect(getHumanAge(8, 8)).toEqual([0, 0]);
  });

  it(`should return [1, 1] if catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [2, 1] if catAge = 27, dogAge = 16`, () => {
    expect(getHumanAge(27, 16)).toEqual([2, 1]);
  });

  it(`should return [3, 2] if catAge = 28, dogAge = 25`, () => {
    expect(getHumanAge(28, 25)).toEqual([3, 2]);
  });

  it(`should return [8, 0] if catAge = 48, dogAge = 14`, () => {
    expect(getHumanAge(48, 14)).toEqual([8, 0]);
  });
});
