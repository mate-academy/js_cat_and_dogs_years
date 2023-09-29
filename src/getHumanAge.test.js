'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('should return an array', () => {
  expect(getHumanAge(0, 1))
    .toBeInstanceOf(Array);
});

test('if cat years = 0 and dog years = 0 should return [0, 0]', () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
});

test('if cat years = 14 and dog years = 14 should return [0, 0]', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
});

test('if cat years = 15 and dog years = 15 should return [1, 1]', () => {
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
});

test('if cat years = 23 and dog years = 23 should return [1, 1]', () => {
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
});

test('if cat years = 23 and dog years = 23 should return [1, 1]', () => {
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
});

test('if cat years = 24 and dog years = 24 should return [2, 2]', () => {
  expect(getHumanAge(24, 24)).toEqual([2, 2]);
});

test('if cat years = 27 and dog years = 27 should return [2, 2]', () => {
  expect(getHumanAge(27, 27)).toEqual([2, 2]);
});

test('if cat years = 28 and dog years = 28 should return [3, 2]', () => {
  expect(getHumanAge(28, 28)).toEqual([3, 2]);
});

test('if cat years = 100 and dog years = 100 should return [21, 17]', () => {
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});
