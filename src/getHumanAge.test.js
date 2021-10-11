'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge(1, 2)).toEqual([0, 0]);
  });

  it(`should return [0, 0] with both entire values = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it(`should return [1, 1] with both entire values = 21`, () => {
    expect(getHumanAge(21, 21)).toEqual([1, 1]);
  });

  it(`should return [2, 2] with both entire values = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [0, 0] with entire values less than 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should return [1, 1] with entire values equal 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });
});
