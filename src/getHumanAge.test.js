'use strict';

const { getHumanAge } = require('./getHumanAge');

test('should be declared', () => {
  expect(getHumanAge).toBeInstanceOf(Function);
});

test('should return an array [0, 0] if catAge and dpgAge is 14', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
});

test('should return an array [1, 1] if catAge and dpgAge is 15', () => {
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
});

test('should return an array [1, 1] if catAge and dpgAge is 23', () => {
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
});

test('should return an array [2, 2] if catAge and dpgAge is 24', () => {
  expect(getHumanAge(24, 24)).toEqual([2, 2]);
});

test('should return an array [2, 2] if catAge and dpgAge is 27', () => {
  expect(getHumanAge(27, 27)).toEqual([2, 2]);
});

test('should return an array [3, 2] if catAge and dpgAge is 28', () => {
  expect(getHumanAge(28, 28)).toEqual([3, 2]);
});

test('should return an array [21, 17] if catAge and dpgAge is 100', () => {
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});
