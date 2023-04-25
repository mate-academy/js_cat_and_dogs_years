'use strict';

describe(`getHumanAge`, () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 if both inputs <15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return 1 if both inputs are 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 1 if inputs are 15-23`, () => {
    expect(getHumanAge(17, 19))
      .toEqual([1, 1]);
  });

  test(`should return 1 if inputs are 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return 2 if inputs are 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return 2 if inputs are 24-27`, () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test(`should return 3 for cat and 2 for dog if inputs are 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return 3 if inputs are 29-33`, () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test(`should return 21 and 17 if inputs are 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test(`should return 0 if inputs are 0 or negative`, () => {
    expect(getHumanAge(0, -1))
      .toEqual([0, 0]);
  });
});
