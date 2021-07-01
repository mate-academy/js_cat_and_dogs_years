'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(11, 12)).toEqual([0, 0]);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(16, 17)).toEqual([1, 1]);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(25, 28)).toEqual([2, 2]);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(30, 29)).toEqual([3, 3]);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(40, 54)).toEqual([6, 8]);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(412, 509)).toEqual([99, 99]);
  });
});
