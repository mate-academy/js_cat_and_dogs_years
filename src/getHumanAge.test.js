'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = getHumanAge(3, 5);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an array [0, 0] if catAge = 9, dogAge = 8`, () => {
    const result = getHumanAge(9, 8);

    expect(result).toEqual([0, 0]);
  });

  it(`should return an array [1, 1] if catAge = 15, dogAge = 15`, () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  it(`should return an array [3, 3] if catAge = 28, dogAge = 29`, () => {
    const result = getHumanAge(28, 29);

    expect(result).toEqual([3, 3]);
  });

  it(`should return an array [2, 2] if catAge = 24, dogAge = 24`, () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });
});
