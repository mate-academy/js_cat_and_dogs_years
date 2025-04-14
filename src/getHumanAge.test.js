'use strict';

describe(`getHumanAge`, () => {
  const { getHumanAge } = require('./getHumanAge');

  test(`should be declared`, () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should be array`, () => {
    expect.arrayContaining(getHumanAge(15, 15));
  });

  test(`should be array with length 2`, () => {
    expect(getHumanAge(15, 15))
      .toHaveLength(2);
  });

  test(`should return 0 values with 0 arguments`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return 0 for a cat and dog `
  + `when they are 14 years old`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return 1 for a cat and dog `
  + `when they are 15 years old`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 1 for a cat and dog `
  + `when they are 23 years old`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return 2 for a cat and dog `
  + `when they are 24 years old`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return 2 for a cat and dog when `
  + `cat has 27 years old and dog has 28 years old`, () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test(`should return 3 for a cat and dog when `
  + `cat has 28 years old and dog has 29 years old`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`should return 4 for a cat and dog when `
  + `cat has 32 years old and dog has 34 years old`, () => {
    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });

  test(`should return 21 and 17 for a cat and dog `
  + `when they are 100 years old`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
