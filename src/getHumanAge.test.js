'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array with two elements', () => {
    expect(getHumanAge(1, 1))
      .toEqual([0, 0]);
  });

  test(`should return 0 if both
    catAge and dogAge are less than 15`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return 1 if both
    catAge and doqAge are between 15 and 23`, () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test(`should return 2 if both
    catAge and doqAge are between 24 and 27`, () => {
    expect(getHumanAge(24, 27))
      .toEqual([2, 2]);
  });

  test(`should return 3 for catAge and 2 for doqAge if both
  catAge and doqAge equal 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return 21 for catAge and 17 for doqAge if both
  catAge and doqAge equal 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
