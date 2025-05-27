'use strict';

const { getHumanAge } = require('./getHumanAge');

test('getHumanAge(0, 0) === [0, 0]', () => {
  expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);
});

test('getHumanAge(14, 14) === [0, 0]', () => {
  expect(getHumanAge(14, 14)).toStrictEqual([0, 0]);
});

test('getHumanAge(15, 15) === [1, 1]', () => {
  expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
});

test('getHumanAge(23, 23) === [1, 1]', () => {
  expect(getHumanAge(23, 23)).toStrictEqual([1, 1]);
});

test('getHumanAge(24, 24) === [2, 2]', () => {
  expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);
});

test('getHumanAge(27, 27) === [2, 2]', () => {
  expect(getHumanAge(27, 27)).toStrictEqual([2, 2]);
});

test('getHumanAge(28, 28) === [3, 2]', () => {
  expect(getHumanAge(28, 28)).toStrictEqual([3, 2]);
});

test('getHumanAge(100, 100) === [21, 17]', () => {
  expect(getHumanAge(100, 100)).toStrictEqual([21, 17]);
});
