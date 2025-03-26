'use strict';

const { getHumanAge } = require('./getHumanAge');

test('should be declared', () => {
  expect(getHumanAge)
    .toBeInstanceOf(Function);
});

test('it should return an array', () => {
  expect(getHumanAge(23, 23))
    .toBeInstanceOf(Array);
});

test('it should return an array with two elements', () => {
  expect(getHumanAge(16, 20))
    .toHaveLength(2);
});

test('it should return 1 for cat and dog when they are 23 years old', () => {
  expect(getHumanAge(23, 23))
    .toEqual([1, 1]);
});

test('it should return 0 for cat and dog when they are 14 years old', () => {
  expect(getHumanAge(14, 14))
    .toEqual([0, 0]);
});

test('it should return 2 for cat and dog when they are 24 years old', () => {
  expect(getHumanAge(24, 24))
    .toEqual([2, 2]);
});

test('it should return 1 for cat and dog when they are 15 years old', () => {
  expect(getHumanAge(15, 15))
    .toEqual([1, 1]);
});

test('it should return 2 when the cat and dog are 27 years old', () => {
  expect(getHumanAge(27, 27))
    .toEqual([2, 2]);
});

test('it should return 3 and 2 when cat and dog are 28 years old', () => {
  expect(getHumanAge(28, 28))
    .toEqual([3, 2]);
});

test('it should return 8 and 7 when cat and dog are 50 years old.', () => {
  expect(getHumanAge(50, 50))
    .toEqual([8, 7]);
});
