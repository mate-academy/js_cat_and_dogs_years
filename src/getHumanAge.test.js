'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(36, 51)).toBeInstanceOf(Array);
  });

  it(`should work correctly for input identical ages for dogs and cats`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should work correctly for input different ages for dogs and cats`, () => {
    expect(getHumanAge(4, 5)).toEqual([0, 0]);
  });

  it(`should return 0 if "cats age" < 15`, () => {
    expect(getHumanAge(9, 15)).toEqual([0, 1]);
  });

  it(`should return 0 if "dogs age" < 15`, () => {
    expect(getHumanAge(15, 9)).toEqual([1, 0]);
  });

  it(`should return 1 if "cats age" < 24`, () => {
    expect(getHumanAge(23, 14)).toEqual([1, 0]);
  });

  it(`should return 1 if "dogs age" < 24`, () => {
    expect(getHumanAge(14, 23)).toEqual([0, 1]);
  });

  it(`should use the formula ("cats age" - 24) * 4 if "cats age" > 24`, () => {
    expect(getHumanAge(66, 23)).toEqual([12, 1]);
  });

  it(`should use the formula ("dogs age" - 24) * 5 if "dogs age" > 24`, () => {
    expect(getHumanAge(66, 57)).toEqual([12, 8]);
  });
});
