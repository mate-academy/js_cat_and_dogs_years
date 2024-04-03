'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('should return [0, 0] for catAge and dogAge both 0', () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
});

test('should return [0, 0] for catAge and dogAge both less than 15', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
});

test('should return [1, 1] for catAge and dogAge both 15', () => {
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
});

test('should return [1, 1] for catAge and dogAge between 15 and 23', () => {
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
});

test('should return [2, 2] for catAge and dogAge between 24 and 27', () => {
  expect(getHumanAge(24, 24)).toEqual([2, 2]);
  expect(getHumanAge(27, 27)).toEqual([2, 2]);
});

test('should return [3, 2] for catAge 28 and dogAge 28', () => {
  expect(getHumanAge(28, 28)).toEqual([3, 2]);
});

test('should return [21, 17] for catAge 100 and dogAge 100', () => {
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});
