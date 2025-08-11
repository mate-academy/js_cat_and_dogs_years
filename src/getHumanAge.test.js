'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`Should return 1, when Cat and Dog age = 15`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`Should return zero, when Cat and Dog age < 15`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`Should return zero, when Cat and Dog age = 0`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`Should return 1, when Cat and Dog age = 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`Should return 2, when Cat and Dog age = 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`Should return 3, when Cat age = 29 and Dog age = 30`, () => {
    expect(getHumanAge(29, 30))
      .toEqual([3, 3]);
  });

  test(`Should return 4 and 3, when Cat and Dog age = 33`, () => {
    expect(getHumanAge(33, 33))
      .toEqual([4, 3]);
  });

  test(`Should return 21 and 17, when Cat and Dog age = 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
