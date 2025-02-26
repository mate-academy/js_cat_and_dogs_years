'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('should return correct human age for cat and dog', () => {
  expect(getHumanAge(0, 0))
    .toEqual([0, 0]);

  expect(getHumanAge(14, 14))
    .toEqual([0, 0]);

  expect(getHumanAge(15, 15))
    .toEqual([1, 1]);

  expect(getHumanAge(23, 23))
    .toEqual([1, 1]);

  expect(getHumanAge(24, 24))
    .toEqual([2, 2]);

  expect(getHumanAge(27, 27))
    .toEqual([2, 2]);

  expect(getHumanAge(28, 28))
    .toEqual([3, 2]);

  expect(getHumanAge(100, 100))
    .toEqual([21, 17]);
});

test('should return 0 if cat age is less than 1', () => {
  expect(getHumanAge(0, 5)).toEqual([0, 0]);
  expect(getHumanAge(-2, 5)).toEqual([0, 0]);
});

test('should return 0 if dog age is less than 1', () => {
  expect(getHumanAge(5, 0)).toEqual([0, 0]);
  expect(getHumanAge(5, -2)).toEqual([0, 0]);
});
