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

  it(`should return [0, 0] when inputs < 15`, () => {
    expect(getHumanAge(9, 9)).toEqual([48, 55]);
  });
});
