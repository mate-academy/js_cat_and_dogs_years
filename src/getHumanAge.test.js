'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });
});

test('Should return 0 if years are less then 15', () => {
  const result = getHumanAge(14, 14);

  expect(result).toEqual([0, 0]);
});

test('Should return correct amount of years if more then 15', () => {
  const result = getHumanAge(32, 32);

  expect(result).toEqual([4, 3]);
});

test('Should return exactly 1 year', () => {
  const result = getHumanAge(15, 15);

  expect(result).toEqual([1, 1]);
});

test('Should handle scalling', () => {
  const result = getHumanAge(100, 100);

  expect(result).toEqual([21, 17]);
});

test('Should return 0 for 0 years', () => {
  const result = getHumanAge(0, 0);

  expect(result).toEqual([0, 0]);
});

test('Should handle mix input', () => {
  const result = getHumanAge(20, 45);

  expect(result).toEqual([1, 6]);
});
