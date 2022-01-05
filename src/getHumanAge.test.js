'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test(`should return [NaN, NaN] when input is empty`, () => {
  expect(getHumanAge())
    .toEqual([NaN, NaN]);
});

test(`should return [0, NaN] when input is [0]`, () => {
  expect(getHumanAge(0))
    .toEqual([0, NaN]);
});

test(`should return array with zeroes when putting into zero values`, () => {
  expect(getHumanAge(0, 0))
    .toEqual([0, 0]);
});

test(`should return [0, 0] when input is [14, 14]`, () => {
  expect(getHumanAge(14, 14))
    .toEqual([0, 0]);
});

test(`should return [1, 1] when input is [15, 15]`, () => {
  expect(getHumanAge(15, 15))
    .toEqual([1, 1]);
});

test(`should return [1, 1] when input is [23, 23]`, () => {
  expect(getHumanAge(23, 23))
    .toEqual([1, 1]);
});

test(`should return [2, 2] when input is [24, 24]`, () => {
  expect(getHumanAge(24, 24))
    .toEqual([2, 2]);
});

test(`should return [2, 2] when input is [27, 27]`, () => {
  expect(getHumanAge(27, 27))
    .toEqual([2, 2]);
});

test(`should return [3, 2] when input is [28, 28]`, () => {
  expect(getHumanAge(28, 28))
    .toEqual([3, 2]);
});

test(`should return [3, 2] when input is [28, 28]`, () => {
  expect(getHumanAge(100, 100))
    .toEqual([21, 17]);
});
