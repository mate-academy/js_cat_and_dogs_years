'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getHumanAge([]).constructor.name).toEqual('Array');
  });

  it(`should return [1, 1] if catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [2, 2] if catAge = 15 + 9, dogAge = 15 + 9`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [3, 3] if catAge = 15 + 9 + 4, dogAge = 15 + 9 + 5`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [5, 5] if catAge = 36, dogAge = 39`, () => {
    expect(getHumanAge(36, 39)).toEqual([5, 5]);
  });

  it(`should return [0, 0] if catAge = 0, dogAge = 0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });
});
