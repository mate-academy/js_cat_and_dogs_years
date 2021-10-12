'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(15, 15)).toBeInstanceOf(Array);
  });

  it(`should return [2, 3] when inputs is 24, 29`, () => {
    expect(getHumanAge(24, 29)).toEqual([2, 3]);
  });

  it(`should return [0] when inputs is 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return [0, 0] when inputs < 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return [9, 9] cat/dog age when inputs 52, 60`, () => {
    expect(getHumanAge(52, 60)).toEqual([9, 9]);
  });

  it(`should return [1, 1] cat/dog age when inputs 15, 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [3, 4] when inputs is 28, 34`, () => {
    expect(getHumanAge(28, 34)).toEqual([3, 4]);
  });

  it(`should return [19, 17] when inputs is 92, 99`, () => {
    expect(getHumanAge(92, 99)).toEqual([19, 17]);
  });

  it(`should return [102, 102] when inputs is 424, 524`, () => {
    expect(getHumanAge(424, 524)).toEqual([102, 102]);
  });
});
