'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(23, 23))
      .toBeInstanceOf(Array);
  });

  test(`should return an array with two elements`, () => {
    expect(getHumanAge(15, 15))
      .toHaveLength(2);
  });

  test(`should return human age
    for both cat and dog as 0 if their age is 0`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return human age for both cat and dog as 0
    if both catAge and dogAge are less than or equal to 14`, () => {
    expect(getHumanAge(13, 14))
      .toEqual([0, 0]);
  });

  test(`should return correct human ages if both
    catAge and doqAge are between 15 and 23`, () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test(`should return correct human ages if both
    catAge and doqAge are between 24 and 27`, () => {
    expect(getHumanAge(24, 27))
      .toEqual([2, 2]);
  });

  test(`should return correct human ages if both
    catAge and doqAge are between 28 and 29`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);

    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`should return correct human ages if both
    catAge and doqAge are 29 or more`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
