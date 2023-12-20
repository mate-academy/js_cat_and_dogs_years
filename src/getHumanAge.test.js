'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 for cat and dog when
    they are less than 15 years old`, () => {
    expect(getHumanAge(5, 5))
      .toEqual([0, 0]);
  });

  test(`should return 0 for cat and dog when
    they equal 14  years old`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return 1 for cat and dog when
    they are equal 15 years old`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 1 for cat and dog when
    they are equal 16 years old`, () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test(`should return 1 for cat and dog when
    they are equal 23 years old`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return 2 for cat and dog when
    they are equal 24 years old`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return 2 for cat and dog when
    they are equal 25 years old`, () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test(`should return 2 for cat and dog when
    they are equal 27 years old`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return 3 for cat and 2 for dog when
    they are equal 28 years old`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return 3 for cat and  dog when
    they are equal 29 years old`, () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test(`should return 3 for cat and  dog when
  they are equal 30 years old`, () => {
    expect(getHumanAge(30, 30))
      .toEqual([3, 3]);
  });

  test(`should return 21 for cat and 17 for dog when
    they are equal 100 years old`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
  
});
