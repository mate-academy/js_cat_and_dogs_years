'use strict';

describe(`Function 'getHumanAge':`, () => {
  const getHumanAge = require('./getHumanAge');

  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(getHumanAge(24, 30))).toBeTruthy();
  });

  it(`should return an array of integers`, () => {
    const res = getHumanAge(17, 24);

    for (const value of res) {
      expect(typeof value).toBe('number');
    }
  });

  it(`should return [1, 1] for catAge = 15, dogAge = 15 `, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should return [2, 2] for catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should return [3, 3] for catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should return [5, 5] for catAge = 36, dogAge = 39`, () => {
    expect(getHumanAge(36, 39)).toEqual([5, 5]);
  });

  it(`should return [3, 7] for catAge = 36, dogAge = 39`, () => {
    expect(getHumanAge(28, 49)).toEqual([3, 7]);
  });

  it(`should return an array with the number of years rounded down.`, () => {
    expect(getHumanAge(30, 52)).not.toEqual([4, 8]);
  });
});
