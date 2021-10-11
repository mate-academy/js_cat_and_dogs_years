'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge([])).toBeInstanceOf(Array);
  });

  it(`should return 15 human years for first cat & dog year`, () => {
    expect(getHumanAge(14, 23)).toEqual([0, 1]);
  });

  it(`should return 15 human years for first cat & dog year`, () => {
    expect(getHumanAge(15, 14)).toEqual([1, 0]);
  });

  it(`should return 15 human years for first cat & dog year`, () => {
    expect(getHumanAge(23, 24)).toEqual([1, 2]);
  });

  it(`should return 15 human years for first cat & dog year`, () => {
    expect(getHumanAge(24, 23)).toEqual([2, 1]);
  });

  it(`should return 15 human years for first cat & dog year`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it(`should return 15 human years for first cat & dog year`, () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });
});
