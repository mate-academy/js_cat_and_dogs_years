'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(18, 29)).toBeInstanceOf(Array);
  });

  it(`should return [0, 0] when cat and dog age less then 14`, () => {
    expect(getHumanAge(13, 13)).toEqual([0, 0]);
  });

  it(`should return [1, 1] when cat and dog age 15 and 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [2, 2] when cat and dog age 24 and 26`, () => {
    expect(getHumanAge(24, 26)).toEqual([2, 2]);
  });

  it(`should return [3, 3] when cat and dog age 30 and 29`, () => {
    expect(getHumanAge(30, 29)).toEqual([3, 3]);
  });

  it(`should return [18, 13] when cat and dog age 88 and 79`, () => {
    expect(getHumanAge(88, 79)).toEqual([18, 13]);
  });
});
