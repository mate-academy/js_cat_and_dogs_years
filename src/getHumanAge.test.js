'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`Function should return [0, 0] if catAge = 0 and dogAge = 0`, () => {
    const catAge = 0;
    const dogAge = 0;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([0, 0]);
  });

  test(`Function should return [0, 0] if catAge = 14 and dogAge = 14`, () => {
    const catAge = 14;
    const dogAge = 14;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([0, 0]);
  });

  test(`Function should return [1, 1] if catAge = 15 and dogAge = 15`, () => {
    const catAge = 15;
    const dogAge = 15;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([1, 1]);
  });

  test(`Function should return [1, 1] if catAge = 23 and dogAge = 23`, () => {
    const catAge = 23;
    const dogAge = 23;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([1, 1]);
  });

  test(`Function should return [2, 2] if catAge = 24 and dogAge = 24`, () => {
    const catAge = 24;
    const dogAge = 24;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([2, 2]);
  });

  test(`Function should return [8, 7] if catAge = 50 and dogAge = 50`, () => {
    const catAge = 50;
    const dogAge = 50;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([8, 7]);
  });
});
