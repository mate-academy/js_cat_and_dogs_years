'use strict';

const getHumanAge = require('./getHumanAge');

test('should return [0, 0] for zero ages', () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
});

test('should return [0, 0] when ages are below first threshold', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
});

test('should convert first 15 years to 1 human year', () => {
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
});

test('should not increase human age until second threshold is reached', () => {
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
});

test('should convert first 24 years to 2 human years', () => {
  expect(getHumanAge(24, 24)).toEqual([2, 2]);
});

test('should correctly handle uneven cat and dog growth rules', () => {
  expect(getHumanAge(27, 27)).toEqual([2, 2]);
  expect(getHumanAge(28, 28)).toEqual([3, 2]);
});

test('should correctly convert large ages', () => {
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});
