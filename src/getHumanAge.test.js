'use strict';

const { getHumanAge } = require('./getHumanAge');

test('should return [0, 0] for zero age', () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
});

test('should return [0, 0] before the first human year', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
});

test('should return [1, 1] for the first human year', () => {
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
});

test('should return [2, 2] for the second human year', () => {
  expect(getHumanAge(24, 24)).toEqual([2, 2]);
  expect(getHumanAge(27, 27)).toEqual([2, 2]);
});

test('should convert cat years: every 4 years after 24 give 1 year', () => {
  expect(getHumanAge(28, 24)).toEqual([3, 2]);
  expect(getHumanAge(31, 24)).toEqual([3, 2]);
  expect(getHumanAge(32, 24)).toEqual([4, 2]);
});

test('should convert dog years: every 5 years after 24 give 1 year', () => {
  expect(getHumanAge(24, 28)).toEqual([2, 2]);
  expect(getHumanAge(24, 29)).toEqual([2, 3]);
  expect(getHumanAge(24, 33)).toEqual([2, 3]);
  expect(getHumanAge(24, 34)).toEqual([2, 4]);
});

test('should return cat age first and dog age second', () => {
  expect(getHumanAge(100, 50)).toEqual([21, 7]);
});

test('should handle big ages', () => {
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});
