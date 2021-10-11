'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = getHumanAge(1, 1);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an array of 2 elements`, () => {
    expect(getHumanAge()).toHaveLength(2);
  });

  it(`should return '[0, 0]' for '14, 14'`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return '[1, 2]' for '15, 24'`, () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it(`should return '[2, 3]' for '24, 29'`, () => {
    expect(getHumanAge(24, 29)).toEqual([2, 3]);
  });

  it(`should return '[3, 5]' for '28, 39'`, () => {
    expect(getHumanAge(28, 39)).toEqual([3, 5]);
  });

  it(`should return '[10, 0]' for '56, 1'`, () => {
    expect(getHumanAge(56, 1)).toEqual([10, 0]);
  });
});
