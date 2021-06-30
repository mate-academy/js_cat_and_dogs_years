'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(1, 1)).toBeInstanceOf(Array);
  });

  it(`should return 15 human years for first cat/dog year`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return +9 human years for second cat/dog year`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return +4 years cat year and + 5 for dog year`, () => {
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
