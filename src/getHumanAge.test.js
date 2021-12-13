'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`Function should return [0, 0] if
  cat's and dog's age < 0 (catAge = -1; dogAge = -1)`, () => {
    const catAge = -1;
    const dogAge = -1;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([0, 0]);
  });

  test(`Function should return [0, 0] if
  cat's and dog's age >= 0 and < 15 (catAge = 0; dogAge = 0)`, () => {
    const catAge = 0;
    const dogAge = 0;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([0, 0]);
  });

  test(`Function should return [0, 0] if
  cat's and dog's age >= 0 and < 15 (catAge = 14; dogAge = 14)`, () => {
    const catAge = 14;
    const dogAge = 14;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([0, 0]);
  });

  test(`Function should return [1, 1] if
  cat's and dog's age >= 15 and < 24 (catAge = 15; dogAge = 15)`, () => {
    const catAge = 15;
    const dogAge = 15;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([1, 1]);
  });

  test(`Function should return [1, 1] if
  cat's and dog's age >= 15 and < 24 (catAge = 23; dogAge = 23)`, () => {
    const catAge = 23;
    const dogAge = 23;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([1, 1]);
  });

  test(`Function should return [2, 2]
  if cat's and dog's age >= 24 (catAge = 24; dogAge = 24)`, () => {
    const catAge = 24;
    const dogAge = 24;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([2, 2]);
  });

  test(`Function should return [2, 2]
  if cat's and dog's age >= 24 (catAge = 50; dogAge = 50)`, () => {
    const catAge = 50;
    const dogAge = 50;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([8, 7]);
  });
});
