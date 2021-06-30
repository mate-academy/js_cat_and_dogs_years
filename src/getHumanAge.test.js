'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return NaN, 'cat age' and 'dog age' = 'string'`, () => {
    expect(getHumanAge('string', 'string')).toEqual([NaN, NaN]);
  });

  it(`should return NaN, 'cat age' = NaN and 'dog age' = 'string'`, () => {
    expect(getHumanAge(NaN, 'string')).toEqual([NaN, NaN]);
  });

  it(`should return [2, 2], if 'cat age' = 24 and 'dog age' = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [3, 3], if 'cat age' = 28 and 'dog age' = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [4, 4], if 'cat age' = 32 and 'dog age' = 34`, () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  it(`should return [10, 10], if 'cat age' = 56 and 'dog age' = 64`, () => {
    expect(getHumanAge(56, 64)).toEqual([10, 10]);
  });

  it(`should return [21, 17,2], if 'cat age' = 100 and 'dog age' = 100`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
