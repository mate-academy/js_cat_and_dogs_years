'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('should return 0 when both inputs are 0', () => {
  expect(getHumanAge(0, 0))
    .toEqual([0, 0]);
});

test('should return 0 when both arguments are from 1 to 14', () => {
  expect(getHumanAge(1, 14))
    .toEqual([0, 0]);
});

test('should return 1 when both arguments are from 15 to 23', () => {
  expect(getHumanAge(15, 23))
    .toEqual([1, 1]);
});

test('should return 2 when cat\'s age from 24 to 27 and dog\'s from 24 to 28', () => {
  expect(getHumanAge(24, 28))
    .toEqual([2, 2]);
});

test('should return 3 when cat\'s age from 28 to 31 and dog\'s from 29 to 32', () => {
  expect(getHumanAge(31, 29))
    .toEqual([3, 3]);
});

test(
  'should add 1 more year for every 4 cat\'s years and every 5 dog\'s years', 
  () => {
    expect(getHumanAge(54, 43))
      .toEqual([9, 5]);
  });
