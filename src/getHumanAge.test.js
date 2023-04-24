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

test('it should return expected ages', () => {
  expect(getHumanAge(23, 20))
    .toEqual([1, 1]);
});

test('it should return 0 if the animal age is less than first element', () => {
  expect(getHumanAge(13, 10))
    .toEqual([0, 0]);
});

test('it should return animal age rounded to the nearest integer.', () => {
  expect(getHumanAge(45, 40))
    .toEqual([7, 5]);
});
