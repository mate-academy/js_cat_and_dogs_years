'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(0, 0)).toBeInstanceOf(Array);
  });

  it(`should return an array [0, 0] if initial parameters is (14, 14)`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return an array [1, 1] if initial parameters is (15, 15)`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return an array [1, 1] if initial parameters is (23, 23)`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it(`should return an array [2, 2] if initial parameters is (24, 24)`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return an array [2, 2] if initial parameters is (27, 28)`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  it(`should return an array [3, 3] if initial parameters is (28, 29)`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return an array [13, 13] if initial params is (68, 79)`, () => {
    expect(getHumanAge(68, 79)).toEqual([13, 13]);
  });

  it(`should return an array [NaN, NaN] if initial params is undefined`, () => {
    expect(getHumanAge(undefined, undefined)).toEqual([NaN, NaN]);
  });
});
