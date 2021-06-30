'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(1)).toBeInstanceOf(Array);
  });

  it(`should return 15 human years for first cat and dog year`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return +9 human years for second cat and dog year`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it(`should return +4 human years for each cat and dog year`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });
});
