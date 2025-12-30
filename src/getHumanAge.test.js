'use strict';

const { getHumanAge } = require('./getHumanAge');

test('getHumanAge should be a function', () => {
  expect(getHumanAge).toBeInstanceOf(Function);
});

test('should return [0, 0] for (0, 0)', () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
});

test('should return [0, 0] if age is less than 15', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
});

test('should return [1, 1] for exactly 15 years', () => {
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
});

test('should still return [1, 1] for 23 years', () => {
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
});

test('should return [2, 2] for 24 years', () => {
  expect(getHumanAge(24, 24)).toEqual([2, 2]);
});

test('cat: every 4 years adds 1 human year', () => {
  expect(getHumanAge(27, 24)).toEqual([2, 2]);
  expect(getHumanAge(28, 24)).toEqual([3, 2]);
});

test('dog: every 5 years adds 1 human year', () => {
  expect(getHumanAge(24, 28)).toEqual([2, 2]);
  expect(getHumanAge(24, 29)).toEqual([2, 3]);
});

test('should work for big numbers', () => {
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});
