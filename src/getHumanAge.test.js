'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return an array [0, 0] of human years
  if each cat's and dog's age is a negative number`, () => {
    const catAge = -5;
    const dogAge = -24;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([0, 0]);
  });

  test(`should return an array [0, 0] of human years
  if each cat's and dog's age equals zero`, () => {
    const catAge = 0;
    const dogAge = 0;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([0, 0]);
  });

  test(`should return an array [0, 0] of human years
  if each cat's and dog's age is less then 15`, () => {
    const catAge = 14;
    const dogAge = 14;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([0, 0]);
  });

  test(`should return an array [1, 1] of human years
  if each cat's and dog's age equals 15`, () => {
    const catAge = 15;
    const dogAge = 15;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([1, 1]);
  });

  test(`should return an array [1, 1] of human years
  if each cat's and dog's age equals 23`, () => {
    const catAge = 23;
    const dogAge = 23;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([1, 1]);
  });

  test(`should return an array [2, 2] of human years
  if each cat's and dog's age equals 24`, () => {
    const catAge = 24;
    const dogAge = 24;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([2, 2]);
  });

  test(`should return an array [2, 2] of human years
  if each cat's and dog's age equals 27`, () => {
    const catAge = 27;
    const dogAge = 27;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([2, 2]);
  });

  test(`should return an array [3, 2] of human years
  if each cat's and dog's age equals 28`, () => {
    const catAge = 28;
    const dogAge = 28;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([3, 2]);
  });

  test(`should return an array [3, 3] of human years
  if each cat's and dog's age equals 29`, () => {
    const catAge = 29;
    const dogAge = 29;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([3, 3]);
  });

  test(`should return an array [57, 57] of human years
  if cat's age is 245 years and dog's age is 300 years`, () => {
    const catAge = 245;
    const dogAge = 300;

    expect(getHumanAge(catAge, dogAge))
      .toEqual([57, 57]);
  });
});
